var app=angular.module('myApp',['ionic'])
.config()
.controller('workCtrl',['$scope','$http',
    function($scope,$http){
      $http
        .get('data/test.php')
        .success(function (data) {
          $scope.dishList = data;
          console.log(data);
        })
  }])