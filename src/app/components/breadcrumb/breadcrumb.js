// function breadcrumbController($scope) {
//   this.text = 'My brand new component!';
//   console.log(this.current);
// }

angular
  .module('app')
  .component('breadcrumb', {
    templateUrl: 'app/components/breadcrumb/breadcrumb.html',
    // controller: breadcrumbController,
    bindings: {
      steps: '<',
      current: '='
    }
  });

