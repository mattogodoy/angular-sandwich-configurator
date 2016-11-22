function priceDisplayController($scope, $log) {
  var self = this;
  this.$log = $log;
  this.price = 0;


  // This receives a message from the parent (app.js)
  $scope.$on('priceChange', function (e, order) {
    console.log('PriceDisplay.js on', order);
    self.calculatePrice(order);
  });
}
priceDisplayController.prototype = {
  calculatePrice: function (order) {
    this.$log.debug('Selection changed:', order);
    let price = this.price = 0;
    Object.keys(order).forEach(function(key,index) {
        order[key].map(item =>{
          price += item.price;
        });
    });
    this.price = price;
  }
}


angular
  .module('app')
  .component('priceDisplay', {
    templateUrl: 'app/components/priceDisplay/priceDisplay.html',
    controller: priceDisplayController
  });
