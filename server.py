"""
 Simple HTTP 1.1 Server - Tony Mathen (W1629791) 

"""
import http
import socket
import threading
from typing import List, Tuple
import email
from io import StringIO
from datetime import datetime
from datetime import timezone
from threading import Thread
import argparse
import os

class HTTPHandler():

    client_connection = ''
    client_address = ''
    request_type = 'GET'
    request_resource = '/'
    request_version = 'HTTP/1.1'
    resource_type = ''
    request_headers = []
    content_type = 'text/plain'


    def create_status_line(self, status_code: int = 200):
        code = str(status_code).encode()
        code_phrase = http.HTTPStatus(status_code).phrase.encode()
        return b"HTTP/1.1 " + code + b" " + code_phrase + b"\r\n"
    
    def parse_request(self, request):

        req, headers = request.split('\r\n', 1)
        message = email.message_from_file(StringIO(headers))
        self.request_headers = dict(message.items())
        self.request_type, self.request_resource, self.request_version = req.split()
    
    def format_headers(self, headers: List[Tuple[bytes, bytes]]):
        return b"".join([key + b": " + value + b"\r\n" for key, value in headers])
    

    def handle_request(self,client_connection, client_address):
        try:
            print('New connection added', client_address, 'Total Thread Count = ', threading.active_count())
            
            #Parse HTTP Request
            self.client_connection = client_connection
            self.client_address = client_address
            request = self.client_connection.recv(4096).decode('utf-8')

            self.client_connection = client_connection
            self.client_address = client_address            
            rmode = 'r'
            req, headers = request.split('\r\n', 1)
            message = email.message_from_file(StringIO(headers))
            self.request_headers = dict(message.items())
            self.request_type, self.request_resource, self.request_version = req.split()
            
            if self.request_type.casefold() != 'get':
                raise HTTPException(statuscode=400)
                
            #Check the resource type
            if self.request_resource == '/':
                self.request_resource = '/index2.html'
                self.content_type = 'text/html'
            
            elif self.request_resource.endswith('.htm') or self.request_resource.endswith('.html'):
                self.content_type = 'text/html'
                rmode = 'r'
            elif self.request_resource.endswith('.jpg'):
                self.content_type = 'image/jpg'
                rmode = 'rb'
            elif self.request_resource.endswith('.jpeg'):
                self.content_type = 'image/jpeg'
                rmode = 'rb'
            elif self.request_resource.endswith('.png'):
                self.content_type = 'image/png'
                rmode = 'rb'
            elif self.request_resource.endswith('.webp'):
                self.content_type = 'image/webp'
                rmode = 'rb'
            elif self.request_resource.endswith('.gif'):
                self.content_type = 'image/gif'
                rmode = 'rb'
            elif self.request_resource.endswith('.js'):
                self.content_type = 'text/javascript'
                rmode = 'r'
            elif self.request_resource.endswith('.css'):
                self.content_type = 'text/css'
                rmode = 'r'
            else:
                raise HTTPException(statuscode=400)

            #Read the resource contents


            fin = open(doc_root + self.request_resource, rmode)
            content = fin.read()
            fin.close()
            #Generate Response
            response = self.make_response(status_code=200,body=content, ctype=self.content_type, is_binary=True if rmode == 'rb' else False)

        
        except FileNotFoundError:
            response = self.make_error_response(status_code=404)
        except PermissionError:
            response = self.make_error_response(status_code=403)
        except ValueError:
            response = self.make_error_response(status_code=400)
        except HTTPException as e:
            response = self.make_error_response(status_code=e.statuscode)

        self.client_connection.sendall(response)
        client_connection.close()


    def make_error_response(self, status_code: int = 200, headers: List[Tuple[bytes, bytes]] = None):
        if headers is None:
            headers = []

        dtstring = datetime.now(timezone.utc)
        headers.append((b"Date", datetime.strftime(dtstring, "%a, %d %b %Y %H:%M:%S GMT").encode("utf-8")))
        headers.append((b"Content-Length", str(0).encode("utf-8")))
        content = [
            self.create_status_line(status_code),
            self.format_headers(headers),
            b"\r\n\r\n",
        ]
        return b"".join(content)

    def make_response(self,
        status_code: int = 200,
        headers: List[Tuple[bytes, bytes]] = None,
        body: bytes = b"",
        ctype: str = 'text/html',
        is_binary: bool = True
    ):
        if headers is None:
            headers = []
        if body:
            # if you add a body you must always send a header that informs
            # about the number of bytes to expect in the body
            dtstring = datetime.now(timezone.utc)
            
            headers.append((b"Content-Type", ctype.encode("utf-8")))
            headers.append((b"Date", datetime.strftime(dtstring, "%a, %d %b %Y %H:%M:%S GMT").encode("utf-8")))
            headers.append((b"Content-Length", str(len(body)).encode("utf-8")))
        content = [
            self.create_status_line(status_code),
            self.format_headers(headers),
            b"\r\n" if body else b"",
            body if is_binary else body.encode('utf-8') ,
        ]
        return b"".join(content)

#Class to handle HTTP exceptions
class HTTPException(Exception):
    def __init__(self, *args: object, statuscode: int) -> None:
        super().__init__(*args)
        self.statuscode = statuscode


parser = argparse.ArgumentParser(description='Simple Web Server')
parser.add_argument('-document_root', metavar='-dr', action='store', type=str, default='htdocs', help='document root for the web server')
parser.add_argument('-port', metavar='-p', action='store', type=int, default=8080, help='port number for the webserver')
args = parser.parse_args()

SERVER_HOST = '0.0.0.0'
SERVER_PORT = int(args.port)
doc_root = args.document_root

def createsocket():
    s_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    s_socket.bind((SERVER_HOST, SERVER_PORT))
    s_socket.listen(1)

    print('Listening on port %s ...' % SERVER_PORT)
    return s_socket

# Create socket and bind to the port
server_socket = createsocket()

# Wait for client connections
while True:

    client_connection, client_address = server_socket.accept()
    #Initialize object to process request
    h = HTTPHandler()
    #Create new thread and invoke handle_request function
    newthread = Thread(target=h.handle_request, args=(client_connection, client_address,))
    newthread.start()

# Close socket
server_socket.close()
