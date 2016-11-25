angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/app.html',
    controller: App
  });

function App($scope, $log) {
  this.todos = [initialTodo];
  this.filter = SHOW_ALL;

  // This receives a message from a child (sandwichSection.js)
  $scope.$on('stepChange', function (e, index) {
    $log.log('Current step:', index);

    $scope.$broadcast('addToPrice', index); // This sends a message to a child (priceDisplay.js)
  });
}
