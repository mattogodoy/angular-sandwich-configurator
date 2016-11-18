describe('extraIngredientsStep component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('extraIngredientsStep', function () {
      return {
        templateUrl: 'app/extraIngredientsStep.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<extraIngredientsStep></extraIngredientsStep>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
