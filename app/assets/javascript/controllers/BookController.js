angular.module('myBookcase')
.controller('BookcaseController', function($scope, Book) {
  $scope.books = Book.query();
  $scope.shortView=function (){
    $(".cuerpo").toggleClass('hidden show');
  }
});
