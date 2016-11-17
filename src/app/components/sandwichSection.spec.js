describe('sandwichSection component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('sandwichSection', function () {
      return {
        templateUrl: 'app/sandwichSection.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<sandwichSection></sandwichSection>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
