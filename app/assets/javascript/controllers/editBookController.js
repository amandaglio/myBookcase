angular.module('myBookcase')
.controller('EditBookController',function($scope,Book, BookUtils,$routeParams, $location){
  $scope.book=Book.get({id:$routeParams.id});
  $scope.bookFormat = BookUtils.bookFormat;
  $scope.bookRate = BookUtils.bookRate;

  $scope.addBook=function(book){
    book.$update();
  };
});
