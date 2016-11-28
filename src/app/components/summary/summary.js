function summaryController($scope,$log) {
   var self = this;
   this.$log = $log;
   this.orderList = [];
   // $log.debug("patata", self);
   $scope.$on('priceChange', function (e, order) {
    self.showElements(order);
  });
}
summaryController.prototype = {
  showElements: function(order){
    this.orderList = [];
    Object.keys(order).forEach((key, index) => {
      order[key].forEach(item => {
        this.orderList.push(item);
      });
    });
    this.$log.debug(this.orderList);
  }
}

angular
  .module('app')
  .component('summary', {
    templateUrl: 'app/components/summary/summary.html',
    controller: summaryController
  });
