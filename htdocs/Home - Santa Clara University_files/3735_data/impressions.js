Function&&Function.prototype&&Function.prototype.bind&&(/(MSIE ([6789]|10|11))|Trident/.test(navigator.userAgent)||function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://platform.twitter.com/",n(n.s=14)}([function(t,e,n){var r=n(1);function i(t,e){var n;for(n in t)t.hasOwnProperty&&!t.hasOwnProperty(n)||e(n,t[n]);return t}function o(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function s(t){return t===Object(t)}function u(t){var e;if(!s(t))return!1;if(Object.keys)return!Object.keys(t).length;for(e in t)if(t.hasOwnProperty(e))return!1;return!0}function c(t){return t?Array.prototype.slice.call(t):[]}t.exports={aug:function(t){return c(arguments).slice(1).forEach(function(e){i(e,function(e,n){t[e]=n})}),t},async:function(t,e){r.setTimeout(function(){t.call(e||null)},0)},compact:function t(e){return i(e,function(n,r){s(r)&&(t(r),u(r)&&delete e[n]),void 0!==r&&null!==r&&""!==r||delete e[n]}),e},contains:function(t,e){return!(!t||!t.indexOf)&&t.indexOf(e)>-1},forIn:i,isObject:s,isEmptyObject:u,toType:o,isType:function(t,e){return t==o(e)},toRealArray:c}},function(t,e){t.exports=window},function(t,e){t.exports=document},function(t,e){t.exports=location},function(t,e,n){var r=n(12);t.exports=new r("__twttr")},function(t,e,n){var r,i=n(2);function o(t){var e,n,o,s=0;for(r={},e=(t=t||i).getElementsByTagName("meta");e[s];s++){if(n=e[s],/^twitter:/.test(n.getAttribute("name")))o=n.getAttribute("name").replace(/^twitter:/,"");else{if(!/^twitter:/.test(n.getAttribute("property")))continue;o=n.getAttribute("property").replace(/^twitter:/,"")}r[o]=n.getAttribute("content")||n.getAttribute("value")}}o(),t.exports={init:o,val:function(t){return r[t]}}},function(t,e,n){var r=n(2),i=n(3),o=n(7),s=n(20),u=n(10),c=n(5),a=!1,f=/https?:\/\/([^/]+).*/i;t.exports={setOn:function(){a=!0},enabled:function(t,e){return!!(a||u.asBoolean(c.val("dnt"))||s.isUrlSensitive(e||i.host)||o.isFramed()&&s.isUrlSensitive(o.rootDocumentLocation())||(t=f.test(t||r.referrer)&&RegExp.$1)&&s.isUrlSensitive(t))}}},function(t,e,n){var r=n(3),i=n(19),o=n(0),s=i.getCanonicalURL()||r.href,u=s;t.exports={isFramed:function(){return s!==u},rootDocumentLocation:function(t){return t&&o.isType("string",t)&&(s=t),s},currentDocumentLocation:function(){return u}}},function(t,e,n){var r=n(9),i=/(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,o=/(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,s=/^http(s?):\/\/(\w+\.)*twitter\.com([:/]|$)/i,u=/^http(s?):\/\/(ton|pbs)\.twimg\.com/,c=/^#?([^.,<>!\s/#\-()'"]+)$/,a=/twitter\.com(?::\d{2,4})?\/intent\/(\w+)/,f=/^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i,l=/^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i,p=/^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/(?:likes|favorites)/i,d=/^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/lists\/([\w-%]+)/i,h=/^https?:\/\/(?:www\.)?twitter\.com\/i\/live\/(\d+)/i,v=/^https?:\/\/syndication\.twitter\.com\/settings/i,m=/^https?:\/\/(localhost|platform)\.twitter\.com(?::\d+)?\/widgets\/widget_iframe\.(.+)/i,g=/^https?:\/\/(?:www\.)?twitter\.com\/search\?q=(\w+)/i;function y(t){return"string"==typeof t&&i.test(t)&&RegExp.$1.length<=20}function w(t){if(y(t))return RegExp.$1}function _(t,e){var n=r.decodeURL(t);if(e=e||!1,n.screen_name=w(t),n.screen_name)return r.url("https://twitter.com/intent/"+(e?"follow":"user"),n)}function E(t){return"string"==typeof t&&c.test(t)}function b(t){return"string"==typeof t&&o.test(t)}t.exports={isHashTag:E,hashTag:function(t,e){if(e=void 0===e||e,E(t))return(e?"#":"")+RegExp.$1},isScreenName:y,screenName:w,isStatus:b,status:function(t){return b(t)&&RegExp.$1},intentForProfileURL:_,intentForFollowURL:function(t){return _(t,!0)},isTwitterURL:function(t){return s.test(t)},isTwimgURL:function(t){return u.test(t)},isIntentURL:function(t){return a.test(t)},isSettingsURL:function(t){return v.test(t)},isWidgetIframeURL:function(t){return m.test(t)},isSearchUrl:function(t){return g.test(t)},regexen:{profile:i},momentId:function(t){return l.test(t)&&RegExp.$1},collectionId:function(t){return f.test(t)&&RegExp.$1},intentType:function(t){return a.test(t)&&RegExp.$1},likesScreenName:function(t){return p.test(t)&&RegExp.$1},listScreenNameAndSlug:function(t){var e,n,r;if(d.test(t)){e=RegExp.$1,n=RegExp.$2;try{r=decodeURIComponent(n)}catch(t){}return{ownerScreenName:e,slug:r||n}}return!1},eventId:function(t){return h.test(t)&&RegExp.$1}}},function(t,e,n){var r=n(10),i=n(0);function o(t){return encodeURIComponent(t).replace(/\+/g,"%2B").replace(/'/g,"%27")}function s(t){return decodeURIComponent(t)}function u(t){var e=[];return i.forIn(t,function(t,n){var s=o(t);i.isType("array",n)||(n=[n]),n.forEach(function(t){r.hasValue(t)&&e.push(s+"="+o(t))})}),e.sort().join("&")}function c(t){var e={};return t?(t.split("&").forEach(function(t){var n=t.split("="),r=s(n[0]),o=s(n[1]);if(2==n.length){if(!i.isType("array",e[r]))return r in e?(e[r]=[e[r]],void e[r].push(o)):void(e[r]=o);e[r].push(o)}}),e):{}}t.exports={url:function(t,e){return u(e).length>0?i.contains(t,"?")?t+"&"+u(e):t+"?"+u(e):t},decodeURL:function(t){var e=t&&t.split("?");return 2==e.length?c(e[1]):{}},decode:c,encode:u,encodePart:o,decodePart:s}},function(t,e,n){var r=n(0),i=[!0,1,"1","on","ON","true","TRUE","yes","YES"],o=[!1,0,"0","off","OFF","false","FALSE","no","NO"];function s(t){return void 0!==t&&null!==t&&""!==t}function u(t){return a(t)&&t%1==0}function c(t){return a(t)&&!u(t)}function a(t){return s(t)&&!isNaN(t)}function f(t){return r.contains(o,t)}function l(t){return r.contains(i,t)}t.exports={hasValue:s,isInt:u,isFloat:c,isNumber:a,isString:function(t){return"string"===r.toType(t)},isArray:function(t){return s(t)&&"array"==r.toType(t)},isTruthValue:l,isFalseValue:f,asInt:function(t){if(u(t))return parseInt(t,10)},asFloat:function(t){if(c(t))return t},asNumber:function(t){if(a(t))return t},asBoolean:function(t){return!(!s(t)||!l(t)&&(f(t)||!t))}}},function(t){t.exports={version:"75b3351:1642573356397"}},function(t,e,n){var r=n(1),i=n(0);function o(t){return i.isType("string",t)?t.split("."):i.isType("array",t)?t:[]}function s(t,e){(e=e||r)[t]=e[t]||{},Object.defineProperty(this,"base",{value:e[t]}),Object.defineProperty(this,"name",{value:t})}i.aug(s.prototype,{get:function(t){return o(t).reduce(function(t,e){if(i.isObject(t))return t[e]},this.base)},set:function(t,e,n){var r=o(t),s=function(t,e){var n=o(e).slice(0,-1);return n.reduce(function(t,e,r){if(t[e]=t[e]||{},!i.isObject(t[e]))throw new Error(n.slice(0,r+1).join(".")+" is already defined with a value.");return t[e]},t)}(this.base,t),u=r.slice(-1);return n&&u in s?s[u]:s[u]=e},init:function(t,e){return this.set(t,e,!0)},unset:function(t){var e=o(t),n=this.get(e.slice(0,-1));n&&delete n[e.slice(-1)]},aug:function(t){var e=this.get(t),n=i.toRealArray(arguments).slice(1);if(e=void 0!==e?e:{},n.unshift(e),!n.every(i.isObject))throw new Error("Cannot augment non-object.");return this.set(t,i.aug.apply(null,n))},call:function(t){var e=this.get(t),n=i.toRealArray(arguments).slice(1);if(!i.isType("function",e))throw new Error("Function "+t+"does not exist.");return e.apply(null,n)},fullPath:function(t){var e=o(t);return e.unshift(this.name),e.join(".")}}),t.exports=s},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=Array.prototype.slice.call(arguments,2);return function(){var i=r.toRealArray(arguments);return t.apply(e,n.concat(i))}}},function(t,e,n){var r,i,o,s;r=n(2),i=n(1),o=n(15),s=n(34),n(35)(),o.exposeApiAndBind(s.init("impressions",{}),i,r,s.base)},function(t,e,n){var r=n(16),i=n(17),o=n(5),s=n(18),u=n(28),c=n(29),a=n(7),f=n(0),l=n(13),p=[],d="twitter-custom-tweet",h="data-twitter-logged",v={item_type:0},m={page:"partnertweet",action:"results"};function g(t){return t=t||{},f.isType("string",t)?{context:t}:{context:t.context,partner:t.partner}}function y(t,e,n){var r;n=g(n),e=e||t.body,f.isType("array",e)||(e=[e]),0!==e.length&&(f.isType("string",e[0])&&(r=_(e,n)),e[0].nodeType==Node.ELEMENT_NODE&&(r=w(e)),r&&s.flushClientEvents())}function w(t){var e,n=[];return f.toRealArray(t).forEach(function(t){t.nodeType===Node.ELEMENT_NODE&&(i.present(t,d)?n.push(t):n=n.concat(f.toRealArray(t.getElementsByClassName(d))))}),f.toRealArray(n).forEach(function(t){var n=function(t){var e={};if(null===t.getAttribute(h))return e.tweetId=t.getAttribute("data-twitter-tweet-id"),e.context=t.getAttribute("data-twitter-tweet-context"),e.partner=t.getAttribute("data-partner"),e.tweetId&&e.tweetId.length>0?e:void 0}(t);t.setAttribute(h,""),n&&(_([n.tweetId],g(n),t),e=!0)}),e}function _(t,e,n){var r,i,u;return e=e||{},r={widget_origin:a.rootDocumentLocation()},i=e.context,u=e.partner||o.val("partner"),f.isType("array",t)||(t=[t]),t=t.filter(function(t){return f.isType("string",t)}),f.isType("string",i)&&(r.description=i),r.item_ids=t,r.item_details={},u&&(r.widget_partner=u),t.forEach(function(t){r.item_details[t]=v}),function(t,e,n,r){p.forEach(function(i){i.call(null,{tweetIds:t,context:e,partner:n,srcElement:r})})}(t,i,u,n),s.enqueueClientEvent(m,r)}function E(t){f.isType("function",t)&&p.push(t)}function b(t){var e=p.indexOf(t);e>-1&&p.splice(e,1)}t.exports={exposeApiAndBind:function(t,e,n,i){var o=new c;u.exposeReadyPromise(o.promise,t,"_e"),f.aug(t,{logTweets:l(y,e,n),attachDebugger:E,detachDebugger:b}),o.promise.then(function(){t.logTweets()}),r(function(){o.resolve(i||t)})},logTweets:y,enqueueTweetsByIds:_,enqueueTweetsFromNodes:w,attachDebugger:E,detachDebugger:b}},function(t,e,n){var r,i,o,s=n(2),u=n(1),c=0,a=[],f=s.createElement("a");function l(){var t,e;for(c=1,t=0,e=a.length;t<e;t++)a[t]()}/^loade|c/.test(s.readyState)&&(c=1),s.addEventListener&&s.addEventListener("DOMContentLoaded",i=function(){s.removeEventListener("DOMContentLoaded",i,!1),l()},!1),f.doScroll&&s.attachEvent("onreadystatechange",r=function(){/^c/.test(s.readyState)&&(s.detachEvent("onreadystatechange",r),l())}),o=f.doScroll?function(t){u.self!=u.top?c?t():a.push(t):function(){try{f.doScroll("left")}catch(e){return setTimeout(function(){o(t)},50)}t()}()}:function(t){c?t():a.push(t)},t.exports=o},function(t,e,n){var r=n(0),i=/\b([\w-_]+)\b/g;function o(t){return new RegExp("\\b"+t+"\\b","g")}function s(t,e){t.classList?t.classList.add(e):o(e).test(t.className)||(t.className+=" "+e)}function u(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(o(e)," ")}function c(t,e){return t.classList?t.classList.contains(e):r.contains(a(t),e)}function a(t){return r.toRealArray(t.classList?t.classList:t.className.match(i))}t.exports={add:s,remove:u,replace:function(t,e,n){if(t.classList&&c(t,e))return u(t,e),void s(t,n);t.className=t.className.replace(o(e),n)},toggle:function(t,e,n){return void 0===n&&t.classList&&t.classList.toggle?t.classList.toggle(e,n):(n?s(t,e):u(t,e),n)},present:c,list:a}},function(t,e,n){var r=n(6),i=n(21),o=n(9),s=n(23),u=n(0),c=n(4).get("scribeCallback"),a=2083,f=[],l=o.url(s.CLIENT_EVENT_ENDPOINT,{dnt:0,l:""}),p=encodeURIComponent(l).length;function d(t,e,n,r,i){var o=!u.isObject(t),a=!!e&&!u.isObject(e);o||a||(c&&c(arguments),h(s.formatClientEventNamespace(t),s.formatClientEventData(e,n,r),s.CLIENT_EVENT_ENDPOINT,i))}function h(t,e,n,r){var c;n&&u.isObject(t)&&u.isObject(e)&&(i.log(t,e),c=s.flattenClientEventPayload(t,e),r=u.aug({},r,{l:s.stringify(c)}),c.dnt&&(r.dnt=1),y(o.url(n,r)))}function v(t,e,n,r){var i=!u.isObject(t),o=!!e&&!u.isObject(e);if(!i&&!o)return m(s.flattenClientEventPayload(s.formatClientEventNamespace(t),s.formatClientEventData(e,n,r)))}function m(t){return f.push(t),f}function g(t){return encodeURIComponent(t).length+3}function y(t){return(new Image).src=t}t.exports={canFlushOneItem:function(t){var e=g(s.stringify(t));return p+e<a},_enqueueRawObject:m,scribe:h,clientEvent:d,clientEvent2:function(t,e,n){return d(t,e,n,2)},enqueueClientEvent:v,flushClientEvents:function(){var t;return f.length>1&&v({page:"widgets_js",component:"scribe_pixel",action:"batch_log"},{}),t=f,f=[],t.reduce(function(e,n,r){var i=e.length,o=i&&e[i-1];return r+1==t.length&&n.event_namespace&&"batch_log"==n.event_namespace.action&&(n.message=["entries:"+r,"requests:"+i].join("/")),function t(e){return Array.isArray(e)||(e=[e]),e.reduce(function(e,n){var r,i=s.stringify(n),o=g(i);return p+o<a?e=e.concat(i):(r=s.splitLogEntry(n)).length>1&&(e=e.concat(t(r))),e},[])}(n).forEach(function(t){var n=g(t);(!o||o.urlLength+n>a)&&(o={urlLength:p,items:[]},e.push(o)),o.urlLength+=n,o.items.push(t)}),e},[]).map(function(t){var e={l:t.items};return r.enabled()&&(e.dnt=1),y(o.url(s.CLIENT_EVENT_ENDPOINT,e))})},interaction:function(t,e,n,r){var i=s.extractTermsFromDOM(t.target||t.srcElement);i.action=r||"click",d(i,e,n)}}},function(t,e,n){var r=n(2),i=n(3),o=n(8);function s(t,e){var n,r;return e=e||i,/^https?:\/\//.test(t)?t:/^\/\//.test(t)?e.protocol+t:(n=e.host+(e.port.length?":"+e.port:""),0!==t.indexOf("/")&&((r=e.pathname.split("/")).pop(),r.push(t),t="/"+r.join("/")),[e.protocol,"//",n,t].join(""))}t.exports={absolutize:s,getCanonicalURL:function(){for(var t,e=r.getElementsByTagName("link"),n=0;e[n];n++)if("canonical"==(t=e[n]).rel)return s(t.href)},getScreenNameFromPage:function(){for(var t,e,n,i=[r.getElementsByTagName("a"),r.getElementsByTagName("link")],s=0,u=0,c=/\bme\b/;t=i[s];s++)for(u=0;e=t[u];u++)if(c.test(e.rel)&&(n=o.screenName(e.href)))return n}}},function(t,e,n){var r=n(3),i=/^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i,o={};function s(t){return t in o?o[t]:o[t]=i.test(t)}t.exports={isUrlSensitive:s,isHostPageSensitive:function(){return s(r.host)}}},function(t,e,n){n(22),t.exports={log:function(t,e){}}},function(t,e,n){var r=n(3),i=n(1),o=n(0),s={},u=o.contains(r.href,"tw_debug=true");function c(){}function a(){}function f(){return i.performance&&+i.performance.now()||+new Date}function l(t,e){if(i.console&&i.console[t])switch(e.length){case 1:i.console[t](e[0]);break;case 2:i.console[t](e[0],e[1]);break;case 3:i.console[t](e[0],e[1],e[2]);break;case 4:i.console[t](e[0],e[1],e[2],e[3]);break;case 5:i.console[t](e[0],e[1],e[2],e[3],e[4]);break;default:0!==e.length&&i.console.warn&&i.console.warn("too many params passed to logger."+t)}}t.exports={devError:c,devInfo:a,devObject:function(t,e){},publicError:function(){l("error",o.toRealArray(arguments))},publicLog:function(){l("info",o.toRealArray(arguments))},publicWarn:function(){l("warn",o.toRealArray(arguments))},time:function(t){u&&(s[t]=f())},timeEnd:function(t){u&&s[t]&&(f(),s[t])}}},function(t,e,n){var r=n(11),i=n(2),o=n(6),s=n(24),u=n(26),c=n(27),a=n(4),f=n(8),l=n(0),p=1,d=r.version,h=a.get("clientEventEndpoint")||"https://syndication.twitter.com/i/jot";function v(t){return l.aug({client:"tfw"},t||{})}function m(t,e,n){return e=e||{},l.aug({},e,{_category_:t,triggered_on:e.triggered_on||+new Date,dnt:o.enabled(n)})}t.exports={extractTermsFromDOM:function t(e,n){var r;return n=n||{},e&&e.nodeType===Node.ELEMENT_NODE?((r=e.getAttribute("data-scribe"))&&r.split(" ").forEach(function(t){var e=t.trim().split(":"),r=e[0],i=e[1];r&&i&&!n[r]&&(n[r]=i)}),t(e.parentNode,n)):n},clickEventElement:function(t){var e=s.closest("[data-expanded-url]",t),n=e&&e.getAttribute("data-expanded-url");return n&&f.isTwitterURL(n)?"twitter_url":"url"},flattenClientEventPayload:function(t,e){return l.aug({},e,{event_namespace:t})},formatGenericEventData:m,formatClientEventData:function(t,e,n){var r=t&&t.widget_origin||i.referrer;return(t=m("tfw_client_event",t,r)).client_version=d,t.format_version=void 0!==n?n:1,e||(t.widget_origin=r),t},formatClientEventNamespace:v,formatHorizonTweetData:function(t){var e={item_ids:[],item_details:{}};return e.item_ids.push(t),e.item_details[t]={item_type:u.TWEET},e},formatTweetAssociation:function(t,e){var n={};return(e=e||{}).association_namespace=v(t),n[p]=e,n},noticeSeen:function(t){return"notice"===t.element&&"seen"===t.action},splitLogEntry:function(t){var e,n,r,i,o;return t.item_ids&&t.item_ids.length>1?(e=Math.floor(t.item_ids.length/2),n=t.item_ids.slice(0,e),r={},i=t.item_ids.slice(e),o={},n.forEach(function(e){r[e]=t.item_details[e]}),i.forEach(function(e){o[e]=t.item_details[e]}),[l.aug({},t,{item_ids:n,item_details:r}),l.aug({},t,{item_ids:i,item_details:o})]):[t]},stringify:function(t){var e,n=Array.prototype.toJSON;return delete Array.prototype.toJSON,e=c.stringify(t),n&&(Array.prototype.toJSON=n),e},CLIENT_EVENT_ENDPOINT:h,RUFOUS_REDIRECT:"https://platform.twitter.com/jot.html"}},function(t,e,n){var r=n(0),i=n(25);t.exports={closest:function t(e,n,o){var s;if(n)return o=o||n&&n.ownerDocument,s=r.isType("function",e)?e:function(t){return function(e){return!!e.tagName&&i(e,t)}}(e),n===o?s(n)?n:void 0:s(n)?n:t(s,n.parentNode,o)}}},function(t,e,n){var r=n(1).HTMLElement,i=r.prototype.matches||r.prototype.matchesSelector||r.prototype.webkitMatchesSelector||r.prototype.mozMatchesSelector||r.prototype.msMatchesSelector||r.prototype.oMatchesSelector;t.exports=function(t,e){if(i)return i.call(t,e)}},function(t){t.exports={TWEET:0,RETWEET:10,CUSTOM_TIMELINE:17,LIVE_VIDEO_EVENT:28,QUOTE_TWEET:23}},function(t,e,n){var r=n(1).JSON;t.exports={stringify:r.stringify||r.encode,parse:r.parse||r.decode}},function(t,e,n){var r=n(13);t.exports={exposeReadyPromise:function(t,e,n){e.ready=r(t.then,t),n&&Array.isArray(e[n])&&(e[n].forEach(r(t.then,t)),delete e[n])}}},function(t,e,n){var r=n(30);t.exports=function(){var t=this;this.promise=new r(function(e,n){t.resolve=e,t.reject=n})}},function(t,e,n){var r=n(1),i=n(31),o=n(33);i.hasPromiseSupport()||(r.Promise=o),t.exports=r.Promise},function(t,e,n){var r=n(2),i=n(32),o=n(1),s=n(0),u=i.userAgent;function c(t){return/(Trident|MSIE|Edge[/ ]?\d)/.test(t=t||u)}t.exports={retina:function(t){return(t=t||o).devicePixelRatio?t.devicePixelRatio>=1.5:!!t.matchMedia&&t.matchMedia("only screen and (min-resolution: 144dpi)").matches},anyIE:c,ie9:function(t){return/MSIE 9/.test(t=t||u)},ie10:function(t){return/MSIE 10/.test(t=t||u)},ios:function(t){return/(iPad|iPhone|iPod)/.test(t=t||u)},android:function(t){return/^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t=t||u)},canPostMessage:function(t,e){return t=t||o,e=e||u,t.postMessage&&!(c(e)&&t.opener)},touch:function(t,e,n){return t=t||o,e=e||i,n=n||u,"ontouchstart"in t||/Opera Mini/.test(n)||e.msMaxTouchPoints>0},cssTransitions:function(){var t=r.body.style;return void 0!==t.transition||void 0!==t.webkitTransition||void 0!==t.mozTransition||void 0!==t.oTransition||void 0!==t.msTransition},hasPromiseSupport:function(){return!!(o.Promise&&o.Promise.resolve&&o.Promise.reject&&o.Promise.all&&o.Promise.race&&(new o.Promise(function(e){t=e}),s.isType("function",t)));var t},hasIntersectionObserverSupport:function(){return!!o.IntersectionObserver},hasPerformanceInformation:function(){return o.performance&&o.performance.getEntriesByType}}},function(t,e){t.exports=navigator},function(t,e,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */var r;r=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},n=0,r=void 0,i=void 0,o=function(t,e){p[n]=t,p[n+1]=e,2===(n+=2)&&(i?i(d):y())},s="undefined"!=typeof window?window:void 0,u=s||{},c=u.MutationObserver||u.WebKitMutationObserver,a="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function l(){var t=setTimeout;return function(){return t(d,1)}}var p=new Array(1e3);function d(){for(var t=0;t<n;t+=2)(0,p[t])(p[t+1]),p[t]=void 0,p[t+1]=void 0;n=0}var h,v,m,g,y=void 0;function w(t,e){var n=this,r=new this.constructor(b);void 0===r[E]&&U(r);var i=n._state;if(i){var s=arguments[i-1];o(function(){return M(i,r,s,n._result)})}else I(n,r,t,e);return r}function _(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(b);return L(e,t),e}a?y=function(){return process.nextTick(d)}:c?(v=0,m=new c(d),g=document.createTextNode(""),m.observe(g,{characterData:!0}),y=function(){g.data=v=++v%2}):f?((h=new MessageChannel).port1.onmessage=d,y=function(){return h.port2.postMessage(0)}):y=void 0===s?function(){try{var t=Function("return this")().require("vertx");return void 0!==(r=t.runOnLoop||t.runOnContext)?function(){r(d)}:l()}catch(t){return l()}}():l();var E=Math.random().toString(36).substring(2);function b(){}var T=void 0,x=1,A=2,O={error:null};function N(t){try{return t.then}catch(t){return O.error=t,O}}function S(e,n,r){n.constructor===e.constructor&&r===w&&n.constructor.resolve===_?function(t,e){e._state===x?P(t,e._result):e._state===A?j(t,e._result):I(e,void 0,function(e){return L(t,e)},function(e){return j(t,e)})}(e,n):r===O?(j(e,O.error),O.error=null):void 0===r?P(e,n):t(r)?function(t,e,n){o(function(t){var r=!1,i=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?L(t,n):P(t,n))},function(e){r||(r=!0,j(t,e))},t._label);!r&&i&&(r=!0,j(t,i))},t)}(e,n,r):P(e,n)}function L(t,e){var n,r;t===e?j(t,new TypeError("You cannot resolve a promise with itself")):(r=typeof(n=e),null===n||"object"!==r&&"function"!==r?P(t,e):S(t,e,N(e)))}function R(t){t._onerror&&t._onerror(t._result),C(t)}function P(t,e){t._state===T&&(t._result=e,t._state=x,0!==t._subscribers.length&&o(C,t))}function j(t,e){t._state===T&&(t._state=A,t._result=e,o(R,t))}function I(t,e,n,r){var i=t._subscribers,s=i.length;t._onerror=null,i[s]=e,i[s+x]=n,i[s+A]=r,0===s&&t._state&&o(C,t)}function C(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,i=void 0,o=t._result,s=0;s<e.length;s+=3)r=e[s],i=e[s+n],r?M(n,r,i,o):i(o);t._subscribers.length=0}}function M(e,n,r,i){var o=t(r),s=void 0,u=void 0,c=void 0,a=void 0;if(o){if((s=function(t,e){try{return t(e)}catch(t){return O.error=t,O}}(r,i))===O?(a=!0,u=s.error,s.error=null):c=!0,n===s)return void j(n,new TypeError("A promises callback cannot return that same promise."))}else s=i,c=!0;n._state!==T||(o&&c?L(n,s):a?j(n,u):e===x?P(n,s):e===A&&j(n,s))}var D=0;function U(t){t[E]=D++,t._state=void 0,t._result=void 0,t._subscribers=[]}var F=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(b),this.promise[E]||U(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?P(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&P(this.promise,this._result))):j(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===T&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===_){var i=N(t);if(i===w&&t._state!==T)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(n===k){var o=new n(b);S(o,t,i),this._willSettleAt(o,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===T&&(this._remaining--,t===A?j(r,n):this._result[e]=n),0===this._remaining&&P(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;I(t,void 0,function(t){return n._settledAt(x,e,t)},function(t){return n._settledAt(A,e,t)})},t}(),k=function(){function e(t){this[E]=D++,this._result=this._state=void 0,this._subscribers=[],b!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){L(t,e)},function(e){j(t,e)})}catch(e){j(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return k.prototype.then=w,k.all=function(t){return new F(this,t).promise},k.race=function(t){var n=this;return e(t)?new n(function(e,r){for(var i=t.length,o=0;o<i;o++)n.resolve(t[o]).then(e,r)}):new n(function(t,e){return e(new TypeError("You must pass an array to race."))})},k.resolve=_,k.reject=function(t){var e=new this(b);return j(e,t),e},k._setScheduler=function(t){i=t},k._setAsap=function(t){o=t},k._asap=o,k.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=k},k.Promise=k,k},t.exports=r()},function(t,e,n){var r=n(12);t.exports=new r("twttr")},function(t,e,n){var r=n(11),i=n(4);t.exports=function(){i.set("buildVersion",r.version)}}]));