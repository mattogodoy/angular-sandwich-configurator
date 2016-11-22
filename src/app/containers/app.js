angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/app.html',
    controller: App
  });

function App($scope, $log) {
  let self = this;
  this.order = {
    bread: [],
    main: [],
    extra: [],
    sauces: []
  }

  $scope.$on('ingredientChange', function (e, type, ingredient) {
    self.order[type] = ingredient;
    $scope.$broadcast('priceChange', self.order);
  });
}
