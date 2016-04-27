angular.module('myBookcase').directive('tnBookCard',function($http,Book){
  return  {
    restrict: 'E',
    templateUrl:'app/assets/templates/books/bookCard2.html',
    scope: {
      book: '='
    },
    link: function ($scope, $element,$attr){
      $scope.removeBook=function(book){
        Book.remove(book).$promise.then(function(){
          $element.remove();
        });
      };
      $scope.addReadDate=function(book){
        $http.put('http://localhost:8080/api/books/addReadDate', book.id ).then(function(bookUpdated){
          $scope.book.readingDates = bookUpdated.data.readingDates;
        });
      };
    }
  }
});
