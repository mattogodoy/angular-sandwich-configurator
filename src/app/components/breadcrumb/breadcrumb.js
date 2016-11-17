function breadcrumbController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('breadcrumb', {
    templateUrl: 'app/components/breadcrumb/breadcrumb.html',
    controller: breadcrumbController
  });

