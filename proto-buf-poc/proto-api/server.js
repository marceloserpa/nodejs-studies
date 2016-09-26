var http = require("http")
var express = require("express")
var app = express();

app.use (function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("AllowedMethods", "POST,GET,OPTIONS,PUT,DELETE,HEAD");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (!req.is('application/octet-stream')) return next()
/**
  var data = [] // List of Buffer objects
  req.on('data', function(chunk) {
      data.push(chunk) // Append Buffer object
  })
  req.on('end', function() {
    if (data.length <= 0 ) return next()
    data = Buffer.concat(data) // Make one large Buffer of it
    console.log('Received buffer', data)
    req.raw = data
    next()
  })
  **/
})

var messages = [
  {
    user: "marcelo_serpa",
    text: "Lorem ipsum"
  },
  {
    user: "marcelo_serpa",
    text: "Message 2"
  },
  {
    user: "marcelo_serpa",
    text: "Message tttt"
  }
];

var ProtoBuf = require('protobufjs');
var builder = ProtoBuf.loadProtoFile('message.proto');
var Message = builder.build('Message')
var MessageList = builder.build('MessageList')

app.get("/api/messages", (req, res, next) => {

  var a = new Message({
    user: "marcelo_serpa",
    text: "Lorem ipsum"
  });

  var b = new Message({
    user: "marcelo_serpa",
    text: "Message 2"
  });

  var list = new MessageList({
    messages: [a, b]
  })
  res.send(list.encode().toBuffer());

})

app.all('*', (req, res)=>{
  res.status(400).send('Not supported')
})

app.listen(3000)
