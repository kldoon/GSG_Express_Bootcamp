const http = require('http');
// import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello <h1>World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`I am the server and I am running at http://${hostname}:${port}/`);
});