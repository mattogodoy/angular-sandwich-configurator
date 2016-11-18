function mainIngredientStepController() {
  this.text = 'Choose the main ingredient';
}

angular
  .module('app')
  .component('mainIngredientStep', {
    templateUrl: 'app/components/steps/mainIngredientStep/mainIngredientStep.html',
    controller: mainIngredientStepController
  });

