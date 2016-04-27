angular.module('myBookcase')
.controller('AddBookController',function($scope,$location,Book,BookUtils,$http){
  $scope.book=new Book();
  $scope.bookFormat = BookUtils.bookFormat;
  $scope.bookRate = BookUtils.bookRate;
  $('.datepicker').datepicker({
    format: "MM yyyy",
    startView: 1,
    minViewMode: 1,
    keyboardNavigation: false,
    language: "es",
    autoclose:true
  });
  $scope.addBook=function(book){
    book.$save().then(function(data){
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
