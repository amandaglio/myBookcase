angular.module('myBookcase')
.controller('ShowBookController',function($scope,Book,$routeParams){
  $scope.book=Book.get({id:$routeParams.id});
});
