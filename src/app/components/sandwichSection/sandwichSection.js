function sandwichSectionController($scope) {
  this.text = 'My brand new component!';
  console.log('init sandwichSection');

  var swipeUp = function (event) {
    console.log('hola!', event);
  };

  $scope.beforeCallback = function (index) {
    console.log('hola!', index);
  };
}

angular
  .module('app')
  .component('sandwichSection', {
    templateUrl: 'app/components/sandwichSection/sandwichSection.html',
    controller: sandwichSectionController
  });

