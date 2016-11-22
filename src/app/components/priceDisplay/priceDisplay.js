function priceDisplayController($scope, $log) {
  var self = this;
  this.$log = $log;
  this.price = 0;

  // This receives a message from the parent (app.js)
  $scope.$on('priceChange', function (e, order) {
    self.calculatePrice(order);
  });
}
priceDisplayController.prototype = {
  calculatePrice: function (order) {
    this.$log.debug('Selection changed:', order);
    this.price = 0;
    Object.keys(order).forEach((key, index) => {
      order[key].forEach(item => {
        this.price += item.price;
      });
    });
  }
};

angular
  .module('app')
  .component('priceDisplay', {
    templateUrl: 'app/components/priceDisplay/priceDisplay.html',
    controller: priceDisplayController
  });
