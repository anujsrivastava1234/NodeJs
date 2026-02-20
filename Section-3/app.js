//import http
const http = require('http');

//create a server
const server = http.createServer((req, res) =>{
    console.log("Request : " , req);
});

//listen to server
server.listen(3000);
