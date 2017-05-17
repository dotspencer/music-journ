var ctrl = angular.module('controllers', []);

ctrl.controller('List', function($scope, $http){
  $http.get('data/songs.json').success(function(data){
    for (var i = 0; i < data.length; i++) {
      data[i].date = new Date(data[i].date);
    }
    $scope.songs = data;
  });
});
