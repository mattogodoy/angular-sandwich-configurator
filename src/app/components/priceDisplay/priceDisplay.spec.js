describe('priceDisplay component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('priceDisplay', function () {
      return {
        templateUrl: 'app/priceDisplay.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<priceDisplay></priceDisplay>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
