function breadcrumbController() {
  this.text = 'My breadcrumb!';
}

angular
  .module('app')
  .component('breadcrumb', {
    templateUrl: 'app/components/breadcrumb.html',
    controller: breadcrumbController
  });
