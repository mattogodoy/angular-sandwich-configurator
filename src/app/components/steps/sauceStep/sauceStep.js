function sauceStepController() {
  this.text = 'Sauce it up!';
}

angular
  .module('app')
  .component('sauceStep', {
    templateUrl: 'app/components/steps/sauceStep/sauceStep.html',
    controller: sauceStepController
  });

