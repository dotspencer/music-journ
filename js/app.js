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
  .when('/settings', {
    templateUrl: 'partials/settings.html'
  })
  .otherwise({
    redirectTo: '/list'
  });
}]);
