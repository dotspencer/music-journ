var app = angular.module('music', []);

app.controller('List', function($scope, $http){
  $http.get('data/songs.json').success(function(data){
    for (var i = 0; i < data.length; i++) {
      data[i].date = new Date(data[i].date);
    }
    $scope.songs = data;
  });

});

app.filter('localDate', function(){
  return function(input){
    return input.toLocaleDateString();
  };
});

app.filter('ytImage', function(){
  return function(input){
    return 'https://img.youtube.com/vi/' + input + '/0.jpg';
  }
})
