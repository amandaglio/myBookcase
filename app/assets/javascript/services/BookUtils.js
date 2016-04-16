angular.module('myBookcase').factory('BookUtils', function BookFactory(){
  var bookUtils = {};
  bookUtils.bookFormat = [
    {"id": 1,
      "format": "Libro"},
    {"id": 2,
      "format": "EBook"}
  ];

  bookUtils.bookRate = [
    {"id": 5,
    "value": "5"},
    {"id": 4,
    "value": "4"},
    {"id": 3,
    "value": "3"},
    {"id": 2,
    "value": "2"},
    {"id": 1,
    "value": "1"},
  ];
  return bookUtils;
});
