
## Student Name : Tony Mathen
## Student Code : W1629791
## Assignment Name : COEN 317: Distributed Systems Winter 22 : Programming Assignment 1

## Date - `02/02/2022`

## Description 
`Server.py is python program which implements a simple web server which handles GET requests and minimal number of file types like jpg, gif etc. The web server supports multithreading as well supports 4 HTTP status codes`

## Directory of Files
* Server.py
* htdocs
    * index.html
    * index2.html
    * ocean.jpg
    * photographer.jpg
    * mountains2.jpg
    * mountainskies.jpg
    * falls2.jpg
    * 72Oz.gif

## Usage
```
python3 server.py -document_root <Document Root - Default is htdocs> -port <port no - Default is 8080>

```

## Implementation Details
A custom class HTTPHandler has been created to handle every request and an HTTPException class to handle HTTP exceptions
The functions for HTTPhandler are as follows:
1. parse_request(self, request) : To parse the request and the resource name, resource type etc.
2. handle_request(self,client_connection, client_address) : This function receives the data from the socket and set the fetch the resource and set the Content-Type 
3. make_response(self, status_code, headers, body, ctype, is_binary) : If the HTTP request is well formed then this function would create the response and send it back to the client
4. make_error_response(self, status_code, headers) : If the HTTP request is not well formed, this function is called which send the appropriate status code
5. create_status_line(self, status_code) : This function is used to create the status line with the suitable HTTP status code
6. format_headers(self, headers) : This function is used to make HTTP reponse headers

The HTTPException class is used to raise HTTP exceptions. 