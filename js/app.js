var app = angular.module('apiangular', ['ngRoute']);

app.controller('MainController', ['$scope','$http', function ($scope, $http) {
  console.log('made it to main control');
  $http.get('https://api.github.com/zen').then(function(data){
    console.log(data);
    $scope.zenData = data.data;
    });
}])
