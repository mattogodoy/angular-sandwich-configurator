describe('Ingredients service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Ingredients) {
    expect(Ingredients.get()).toEqual(3);
  }));
});
