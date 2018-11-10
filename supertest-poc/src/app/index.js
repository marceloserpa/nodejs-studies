let express = require('express');
let app = express();

let database = require('../database-fake');
let messageBuilder = require('../message');

console.log(database);

app.get('/hello-world', (request, response) => {
  response.send({
    message: messageBuilder.sayHello()
  });
});

app.post('/save', (request, response) => {
  let user = request.body;
  database.save().then(result => {
    console.log(result);
    response.send(result);
  });
});

module.exports = app;
