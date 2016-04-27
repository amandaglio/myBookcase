angular.module('myBookcase')
.controller('EditBookController',function($scope,Book, BookUtils,$routeParams, $location,$http,$filter){

  Book.get({id:$routeParams.id}).$promise.then(function(data){
    data.releaseDate = $filter('date')(data.releaseDate, 'MMMM yyyy');
    $scope.book=data;
  });

  $scope.bookFormat = BookUtils.bookFormat;
  $scope.bookRate = BookUtils.bookRate;

//documentacion de este datepicker: http://bootstrap-datepicker.readthedocs.org/en/latest/index.html
$('.datepicker').datepicker({
  format: "MM yyyy",
  startView: 1,
  minViewMode: 1,
  keyboardNavigation: false,
  language: "es",
  autoclose:true
});


  $scope.addBook=function(book){
    book.$update().then(function(data){
      console.log("actualizado");
      $location.path("/books/" + data.id);
    });
  };
  $scope.removeReadDate=function(book, readingDate){
    $http.put('http://localhost:8080/api/books/removeReadDate', {'bookId':book.id, 'date':readingDate} ).then(function (bookUpdated){
      $scope.book.readingDates = bookUpdated.data.readingDates;
    }
  )};

  $scope.addReadDate=function(book,readingDate){
    $http.put('http://localhost:8080/api/books/addReadDate', {'bookId':book.id, 'date':readingDate} ).then(function(bookUpdated){
      $scope.book.readingDates = bookUpdated.data.readingDates;
      $("#readingDateToAdd").val("");
    });
  };
});
