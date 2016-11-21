function priceDisplayController($scope, $log) {
  this.text = 'This is your price!';
  this.price = 0;
  var that = this;

  $scope.calculatePrice = function () {
    that.price ++;
  };

  // This receives a message from the parent (app.js)
  $scope.$on('addToPrice', function (e, price) {
    that.price += price;
    $log.log('Price changed:', that.price);
  });
}

angular
  .module('app')
  .component('priceDisplay', {
    templateUrl: 'app/components/priceDisplay/priceDisplay.html',
    controller: priceDisplayController
  });
