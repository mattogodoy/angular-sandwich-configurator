function sandwichSectionController($scope, $log) {
  this.text = 'My brand new component!';

  $scope.indexChanged = function (index) {
    $scope.$emit('stepChange', index); // This sends a message to the parent (app.js)
  };
}

angular
  .module('app')
  .component('sandwichSection', {
    templateUrl: 'app/components/sandwichSection/sandwichSection.html',
    controller: sandwichSectionController
  });
