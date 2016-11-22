function ingredientsSelectorController($log, $scope) {
  this.$log = $log;
  this.$scope = $scope;
  this.selectedItems = [];
  this.$log.info('Ingredients Selector');
}

ingredientsSelectorController.prototype = {
  toggleItem: function (item) {
    let index = this.selectedItems.findIndex(i => i.id === item.id);
    let isMultiSelect = this.multiSelect;
    let isEmpty = this.selectedItems.length === 0;
    // It should allow multiSelect in order of the param.
    if (isMultiSelect || (!isMultiSelect && (index !== -1 || isEmpty))) {
      if (index === -1) {
        this.selectedItems.push(item);
        item.active = true;
      } else {
        this.selectedItems.splice(index, 1);
        item.active = false;
      }
      this.$scope.$emit('ingredientChange', this.ingridientType, this.selectedItems);
    }
    this.$log.debug('Ingridients select', this.selectedItems);
  }
};

angular
  .module('app')
  .component('ingredientsSelector', {
    templateUrl: 'app/components/ingredientsSelector/ingredientsSelector.html',
    controller: ingredientsSelectorController,
    bindings: {
      ingredients: '<',
      multiSelect: '<',
      label: '@',
      ingridientType: '@'
    }
  });
