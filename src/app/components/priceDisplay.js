function priceDisplayController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('priceDisplay', {
    templateUrl: 'app/components/priceDisplay.html',
    controller: priceDisplayController
  });

