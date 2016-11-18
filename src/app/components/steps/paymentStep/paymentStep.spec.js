describe('paymentStep component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('paymentStep', function () {
      return {
        templateUrl: 'app/paymentStep.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<paymentStep></paymentStep>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
