describe('summary component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('summary', function () {
      return {
        templateUrl: 'app/summary.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<summary></summary>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
