function sandwichSectionController() {
  this.text = 'My brand new sandwich section!';
}

angular
  .module('app')
  .component('sandwichSection', {
    templateUrl: 'app/components/sandwichSection.html',
    controller: sandwichSectionController
  });
