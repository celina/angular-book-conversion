var app = angular.module('BookApp', []);

app.controller('BookController', ['$http', function($http) {
  console.log('BookController is loaded');
  var self = this;
  self.bookList = [];
  self.newBook = {};

getBooks();

  function getBooks() {
    $http({
      method: 'GET',
      url: '/books'
    }).then(function(response) {
      console.log(response.data);
      self.bookList = response.data;
    });
  }

self.addBook = function() {
  $http({
    method: 'POST',
    url: '/books/new',
    data: self.newBook
  }).then(function(response) {
    console.log(response);
    getBooks();
    self.newTask = {};
  }, function errorCallback(response) { // error handling
    console.log(response);
  });
};

}]); // end app.controller
