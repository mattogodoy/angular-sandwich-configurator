describe('sauceStep component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('sauceStep', function () {
      return {
        templateUrl: 'app/sauceStep.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<sauceStep></sauceStep>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
