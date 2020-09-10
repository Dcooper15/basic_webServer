const http = require("http");
// local loopback/host
const hostname = "127.0.0.1";
const port = 3333;

const server = http.createServer(function (request, response) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello I am Node!");
});

server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}`);
});

