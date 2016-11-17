function sandwichSectionController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('sandwichSection', {
    templateUrl: 'app/components/sandwichSection/sandwichSection.html',
    controller: sandwichSectionController
  });

