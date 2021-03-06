var control = angular.module('controllers', []);

// Controller array notation is used to prevent errors when code is minified
control.controller('List', ['$scope', '$http', function($scope, $http){
  $http.get('data/songs.json').success(function(data){
    for (var i = 0; i < data.length; i++) {
      data[i].date = new Date(data[i].date);
    }
    $scope.songs = data;
  });
}]);

control.controller('Player', ['$scope', '$routeParams', '$sce', function($scope, $routeParams, $sce){
  $scope.vid = $routeParams.vid;
  $scope.vidUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $scope.vid + '?rel=0');
}]);
