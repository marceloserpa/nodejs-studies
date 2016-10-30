var fs = require('fs');
process.env.UV_THREADPOOL_SIZE = 4;

var thread = 1;
var count = 1;
while(count <= 6) {
	console.log("Thread #" + count++ + " iniciou");
	fs.readFile('input.txt', function (err, data) {
		console.log("Thread #" + thread++ + " terminou");
	});
}
