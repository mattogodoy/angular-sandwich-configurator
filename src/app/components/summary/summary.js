function summaryController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('summary', {
    templateUrl: 'app/components/summary/summary.html',
    controller: summaryController
  });
