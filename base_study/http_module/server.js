var http = require('http');
var url = require('url');

http.createServer(function(request, response) {

  var url_parts = url.parse(request.url, true);

  if (request.method === 'GET' && url_parts.pathname === '/echo') {
    var body = [];
    request.on('data', function(chunk) {
      console.log('on data');
      body.push(chunk);
    }).on('end', function() {
      console.log('on end');
      body = Buffer.concat(body).toString();
      var timeout = url_parts.query.time;
      if(timeout !== undefined){
        setTimeout(function(){
          console.log('Finished after ' + timeout)
          response.end(body);
        }, timeout);
      }
    })
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
