var http = require('http');

var count = 1
http.createServer(function (req, res) {
  console.time('event');
  console.log('Request:' + count++);
  var num = 1;
  while(num < 5000000000){
    num++;
  }
  console.timeEnd('event');
	res.end("process end");
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
