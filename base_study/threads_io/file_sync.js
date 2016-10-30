var fs = require('fs');

var thread = 1;
var count = 1;
while(count <= 6) {
	console.log("Thread #" + count++ + " iniciou");
	fs.readFileSync('input.txt');
	console.log("Thread #" + thread++ + " terminou");
}
