function priceDisplayController($scope) {
  this.text = 'This is your price!';
  this.price = 0;
  var that = this;
  $scope.calculatePrice = function () {
    console.log('HERE I AM');
    that.price ++;
  }
}

angular
  .module('app')
  .component('priceDisplay', {
    templateUrl: 'app/components/priceDisplay/priceDisplay.html',
    controller: priceDisplayController
  });

