angular.module('myBookcase')
.controller('AddBookController',function($scope,$location,Book,BookUtils){
  $scope.book=new Book();
  $scope.bookFormat = BookUtils.bookFormat;
  $scope.bookRate = BookUtils.bookRate;
  $scope.addBook=function(book){
    book.$save().then(function(data){
      $location.path("/books/" + data.id);
    });
  };
});
