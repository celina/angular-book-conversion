var app = angular.module('BookApp', ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.controller('BookController', ['$http', function($http, $scope) {

  var self = this;
  self.bookList = [];
  self.newBook = {};
  self.updateBook = {};

getBooks();

  function getBooks() {
    $http({
      method: 'GET',
      url: '/books'
    }).then(function(response) {
      self.bookList = response.data;
    });
  }

self.addBook = function() {
  $http({
    method: 'POST',
    url: '/books/new',
    data: self.newBook
  }).then(function(response) {
    getBooks();
    self.newTask = {};
  }, function(response) { // error handling
    console.log(response);
  });
}; // end self.addBook


self.deleteBook = function(idOfBookToDelete) {
  $http({
    method: 'DELETE',
    url: '/books/delete/' + idOfBookToDelete,
  }).then(function(response) {
    getBooks();
  }, function(response) {
    console.log(response);
  });
};

self.saveBook = function(bookObject) {
  console.log(bookObject);
  $http({
    method: 'PUT',
    url: '/books/save/' + bookObject.id,
    data: bookObject
  }).then(function(response) {
    getBooks();
  }, function(response) {
    console.log(response);
  });
};

}]); // end app.controller
