function breadStepController() {
  this.text = 'Select your bread';
}

angular
  .module('app')
  .component('breadStep', {
    templateUrl: 'app/components/steps/breadStep/breadStep.html',
    controller: breadStepController
  });

