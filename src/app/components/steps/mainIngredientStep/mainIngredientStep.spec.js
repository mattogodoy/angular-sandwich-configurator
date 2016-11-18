describe('mainIngredientStep component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('mainIngredientStep', function () {
      return {
        templateUrl: 'app/mainIngredientStep.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<mainIngredientStep></mainIngredientStep>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
