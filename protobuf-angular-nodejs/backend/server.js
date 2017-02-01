
var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var protobuf = require('protobufjs');
var app = express();

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("AllowedMethods", "POST,GET,OPTIONS,PUT,DELETE,HEAD");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //if (!req.is('application/octet-stream')) return next();
  next();

});


var books = [];

app.get("/api/books", (req, res, next) => {
  protobuf.load("message.proto", (err, root) => {
    console.log("Execute: GET - api/books");
    if (err) throw err;
    var BookMessage = root.lookup("bookpackage.Book");
    var message = BookMessage.create({author: "Stephen King", title: "The shining", description : "Lorem", id: "1"});
    var buffer = BookMessage.encode(message).finish();

    var BookListMessage = root.lookup("bookpackage.BookList");
    var bookList = BookListMessage.create({books: [message]})

    res.send(BookListMessage.encode(bookList).finish());
  });
});

app.post("/api/books", (req, res, next) => {
  console.log("Execute: POST - api/books");
  books.push(req.body);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
