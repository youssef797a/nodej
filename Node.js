const http = require("http")

http.createServer(function (request, response) {
    // Send the HTTP header 
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello World\n');
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running athttp:/127.0.0.1:3000/');