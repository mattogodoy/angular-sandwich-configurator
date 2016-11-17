describe('ingredientsSelector component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('ingredientsSelector', function () {
      return {
        templateUrl: 'app/ingredientsSelector.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<ingredientsSelector></ingredientsSelector>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
