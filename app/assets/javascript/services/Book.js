angular.module('myBookcase').factory('Book', function BookFactory($resource){
  return $resource('http://localhost:8080/api/books/:id', {id: "@_id"},{
    update: {
      method: 'PUT'
    }
  });
});
