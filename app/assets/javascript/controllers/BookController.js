angular.module('myBookcase')
.controller('BookcaseController', function($scope, Book) {
  $scope.books = Book.query();
});
