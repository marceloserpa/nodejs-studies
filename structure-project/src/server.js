import http from 'http';

const PORT = 9000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(PORT, '127.0.0.1');

console.log('Server running at http://127.0.0.1:/'+PORT);
