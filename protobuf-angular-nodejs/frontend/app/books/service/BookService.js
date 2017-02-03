(function(){
  'use strict'

  angular
    .module('books')
    .constant('URL_BOOK_API', 'http://localhost:3000/api/books/')
    .service('BookService', BookService);

  BookService.$inject = ['$http', '$q', 'URL_BOOK_API'];

  function BookService($http, $q, URL_BOOK_API){

    return {
      getAll : getAll,
      save : save,
      deleteById : deleteById,
      update : update,
      find : find
    }

    function getAll(){
      return $http.get(URL_BOOK_API, {responseType: "arraybuffer"})
        .then((response) => {
          return protobuf.load("/message.proto").then((root) => {
            var BookListMessage = root.lookup("bookpackage.BookList");
            var booksList = BookListMessage.decode(new Uint8Array(response.data));

            var BookMessage = root.lookup("bookpackage.Book");
            var booksMessage = booksList.books;

            var books = [];
            for (var i = 0; i < booksMessage.length; i++) {
                books.push({
                  "title": booksMessage[i].title,
                  "author": booksMessage[i].author,
                  "id": booksMessage[i].id,
                  "description": booksMessage[i].description,
                });
            }
            return books;
          });
        })
        .catch(handleErrorHttpRequest);
    };

    function save(book){
      return protobuf.load("/message.proto").then((root) => {
        var BookMessage = root.lookup("bookpackage.Book");
        var message = BookMessage.create({author: book.author, title: book.title, description : book.description, id: book.id});
        var buffer = BookMessage.encode(message).finish();

        var req = {
          method: 'POST',
          url: URL_BOOK_API,
          transformRequest: function(r) { return r;},
          headers: {'Content-Type': 'application/octet-stream'},
          data: buffer,
          responseType: 'arraybuffer'
        }

        return $http(req).then(handleCompleteHttpRequest)
          .catch(handleErrorHttpRequest);
      });
    }

    function deleteById(id){
      return $http.delete(URL_BOOK_API + id)
        .then(handleCompleteHttpRequest)
        .catch(handleErrorHttpRequest);
    }

    function update(book){
      return protobuf.load("/message.proto").then((root) => {
        var BookMessage = root.lookup("bookpackage.Book");
        var message = BookMessage.create({author: book.author, title: book.title, description : book.description, id: book.id});
        var buffer = BookMessage.encode(message).finish();
        var req = {
          method: 'PUT',
          url: URL_BOOK_API + book.id,
          transformRequest: function(r) { return r;},
          headers: {'Content-Type': 'application/octet-stream'},
          data: buffer,
          responseType: 'arraybuffer'
        }

        return $http(req).then(handleCompleteHttpRequest)
          .catch(handleErrorHttpRequest);
      });
    }

    function find(id){
        return $http.get(URL_BOOK_API+id, {responseType: "arraybuffer"})
          .then((response) => {
            return protobuf.load("/message.proto").then((root) => {
              var BookMessage = root.lookup("bookpackage.Book");
              console.log("Execute - " + URL_BOOK_API+id);
              console.log(response.data);
              var book = BookMessage.decode(new Uint8Array(response.data));
              console.log("End execute - " + URL_BOOK_API+id);
              return book;
            });
          })
          .catch(handleErrorHttpRequest);
    }

    function handleCompleteHttpRequest(response){
      return response.data;
    }

    function handleErrorHttpRequest(error){
      var newMessage = 'XHR Failed for acess Book API'
      if (error && error.data && error.data.description) {
        newMessage = newMessage + '\n' + error.data.description;
      }
      error.data = newMessage;
      console.error(error.data);
      $q.reject(error);
    }

  }
})();
