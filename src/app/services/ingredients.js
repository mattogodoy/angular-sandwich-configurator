function Ingredients($http) {
  this.$http = $http;
}

Ingredients.prototype.get = function ($http) {
  return this.$http({method: 'GET', url: '/app/data-mock/data.json'});
};

angular
  .module('app')
  .service('Ingredients', Ingredients);
