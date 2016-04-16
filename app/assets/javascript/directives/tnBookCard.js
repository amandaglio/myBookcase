angular.module('myBookcase').directive('tnBookCard',function(){
  return  {
    restrict: 'E',
    templateUrl:'app/assets/templates/books/bookCard2.html',
    scope: {
      book: '='
    },
    controller: function ($scope, $element,$http,Book){
      $scope.removeBook=function(book){
        Book.remove(book);
      };
      $scope.addReadDate=function(id){
        $http.put('http://localhost:8080/api/books/addReadDate', id );
      }
    }
  }
});
