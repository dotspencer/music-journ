var control = angular.module('controllers', []);

control.controller('List', function($scope, $http){
  $http.get('data/songs.json').success(function(data){
    for (var i = 0; i < data.length; i++) {
      data[i].date = new Date(data[i].date);
    }
    $scope.songs = data;
  });
});

control.controller('Player', function($scope, $routeParams){
  $scope.vid = $routeParams.vid;
});
