describe('breadStep component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('breadStep', function () {
      return {
        templateUrl: 'app/breadStep.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<breadStep></breadStep>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
