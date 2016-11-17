describe('breadcrumb component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('breadcrumb', function () {
      return {
        templateUrl: 'app/breadcrumb.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<breadcrumb></breadcrumb>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
