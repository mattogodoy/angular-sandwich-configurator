function paymentStepController() {
  this.text = 'Ok, time to pay...';
}

angular
  .module('app')
  .component('paymentStep', {
    templateUrl: 'app/components/steps/paymentStep/paymentStep.html',
    controller: paymentStepController
  });

