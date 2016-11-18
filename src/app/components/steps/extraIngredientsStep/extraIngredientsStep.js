function extraIngredientsStepController() {
  this.text = 'Choose extra ingredients';
}

angular
  .module('app')
  .component('extraIngredientsStep', {
    templateUrl: 'app/components/steps/extraIngredientsStep/extraIngredientsStep.html',
    controller: extraIngredientsStepController
  });

