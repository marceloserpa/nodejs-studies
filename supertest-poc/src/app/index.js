let express = require('express');
let app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

let database = require('../database-fake');
let messageBuilder = require('../message');

app.get('/hello-world', (request, response) => {
  response.send({
    message: messageBuilder.sayHello()
  });
});

app.post('/save', (request, response) => {
  let user = request.body;
  console.log(user)
  database.save(user);
  response.send('a');
  /*
  database.save(user).then(result => {
    console.log(result);
    response.send(result);
  });*/
});

module.exports = app;
