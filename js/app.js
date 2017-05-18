var app = angular.module('app', [
  'ngRoute',
  'controllers',
  'customFilters'
]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'List'
  })
  .when('/player/:vid', {
    templateUrl: 'partials/player.html',
    controller: 'Player'
  })
  .otherwise({
    redirectTo: '/list'
  });
}]);
