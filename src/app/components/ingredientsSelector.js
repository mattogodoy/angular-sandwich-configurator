function ingredientsSelectorController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('ingredientsSelector', {
    templateUrl: 'app/components/ingredientsSelector.html',
    controller: ingredientsSelectorController
  });

