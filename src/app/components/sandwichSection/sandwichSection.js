function sandwichSectionController($scope, $log, Ingredients) {
  this.$log = $log;
  this.$scope = $scope;
  this.data = [];

  Ingredients.get()
    .then(response => {
      this.data = response.data;
      this.$log.debug('DATA: ', this.data);
    });
}

angular
  .module('app')
  .component('sandwichSection', {
    templateUrl: 'app/components/sandwichSection/sandwichSection.html',
    controller: sandwichSectionController
  });
