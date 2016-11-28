angular
  .module('app')
  .component('headerComponent', {
    templateUrl: 'app/components/header/header.html',
    controller: header
  });

/** @ngInject */
function header($scope) {
  this.$scope = $scope;
}

header.prototype = {
  makeRandom: function () {
    this.$scope.$emit('makeRandom');
  }
};
