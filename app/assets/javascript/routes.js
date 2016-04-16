angular.module('myBookcase').config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/books'
    })

    .when('/books', {
      templateUrl: "app/assets/templates/books/index.html",
      controller: "BookcaseController"
    })
    .when('/books/add', {
      templateUrl: "app/assets/templates/books/addBook.html",
      controller: "AddBookController"
    })
    .when('/books/:id', {
      templateUrl: "app/assets/templates/books/showBook.html",
      controller: "ShowBookController"
    })
    .when('/books/:id/edit', {
      templateUrl: "app/assets/templates/books/addBook.html",
      controller: "EditBookController"
    });

});
