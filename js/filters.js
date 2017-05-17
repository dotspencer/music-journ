var filters = angular.module('customFilters', []);

filters.filter('localDate', function(){
  return function(input){
    return input.toLocaleDateString();
  };
});

filters.filter('ytImage', function(){
  return function(input){
    return 'https://img.youtube.com/vi/' + input + '/0.jpg';
  };
});
