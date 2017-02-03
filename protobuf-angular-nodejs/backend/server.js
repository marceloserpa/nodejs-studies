
var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var protobuf = require('protobufjs');
var app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (!req.is('application/octet-stream')) return next();

  var data = []
  req.on('data', function(chunk) {
      data.push(chunk)
  })
  req.on('end', function() {
    if (data.length <= 0 ) return next()
    data = Buffer.concat(data)
    console.log('Received buffer', data)
    req.raw = data
    next()
  })

});

var books = [];

app.get("/api/books", (req, res, next) => {
  protobuf.load("message.proto", (err, root) => {
    console.log("Execute: GET - api/books");
    if (err) throw err;
    var BookMessage = root.lookup("bookpackage.Book");
    var booksEncoded = [];
    for (var i = 0; i < books.length; i++) {
      booksEncoded.push(
        BookMessage.create({
          author: books[i].author,
          title: books[i].title,
          description: books[i].description,
          id: books[i].id
        })
      );
    }
    var BookListMessage = root.lookup("bookpackage.BookList");
    var encoded = BookListMessage.encode({books: booksEncoded}).finish();
    res.send(encoded);
  });
});

app.post("/api/books", (req, res, next) => {
  console.log("Execute: POST - api/books");
  protobuf.load("message.proto").then(root => {
    var BookMessage = root.lookup("bookpackage.Book");
    var bookMessage = BookMessage.decode(new Uint8Array(req.raw));
    books.push({
      "title": bookMessage.title,
      "author": bookMessage.author,
      "id": bookMessage.id,
      "description": bookMessage.description,
    });
    console.log(books);
  });
});

app.get("/api/books/:bookId", (req, res, next) => {
  protobuf.load("message.proto", (err, root) => {
    console.log("Execute: GET - api/books");
    var id = req.params.bookId;
    if (err) throw err;
    var BookMessage = root.lookup("bookpackage.Book");
    for (var i = 0; i < books.length; i++) {
      console.log("Comparando: " + books[i].id + " -> " + id)
      if(books[i].id == id){
        var bookEncoded = BookMessage.encode({
          author: books[i].author,
          title: books[i].title,
          description: books[i].description,
          id: books[i].id
        }).finish();
        res.send(bookEncoded);
      }
    }
  });
});

app.put("/api/books/:bookId", (req, res, next) => {
  protobuf.load("message.proto").then(root => {
    var id = req.params.bookId;
    console.log("Execute: PUT - api/books/"+id);
    var BookMessage = root.lookup("bookpackage.Book");
    var bookMessage = BookMessage.decode(new Uint8Array(req.raw));
    for (var i = 0; i < books.length; i++) {
      if(books[i].id == id){
        books[i] = {
          "title": bookMessage.title,
          "author": bookMessage.author,
          "id": bookMessage.id,
          "description": bookMessage.description,
        };
      }
    }
    console.log(books);
  });

});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
