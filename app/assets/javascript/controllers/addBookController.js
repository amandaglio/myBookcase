angular.module('myBookcase')
.controller('AddBookController',function($scope,Book,BookUtils){
  $scope.book=new Book();
  $scope.bookFormat = BookUtils.bookFormat;
  $scope.bookRate = BookUtils.bookRate;
  // $scope.book.releaseDate = new Date();
  $scope.addBook=function(book){
    book.$save();
  };
});
