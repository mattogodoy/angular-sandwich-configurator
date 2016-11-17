angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      component: 'app',
      abstract: true
    })
    .state('app.main', {
      name: 'main',
      url: '/',
      template: '<main-section></main-section>'
    })
    .state('app.sandwich', {
      name: 'sandwich',
      url: '/sandwich',
      template: '<sandwich-section></sandwich-section>'
    });
}
