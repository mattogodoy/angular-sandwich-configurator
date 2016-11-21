function ingredientsSelectorController($log) {
  this.$log = $log;
  this.title = 'Choose one of these types of bread:';
  this.$log.info('Ingredients Selector');
  //TODO: this.breads should be interchanged with attr ingredients
  this.breads = [
    {
      "id": 1,
      "name": "White Bread",
      "price": 1,
      "image": "https://placehold.it/150x150"
    },
    {
      "id": 2,
      "name": "Wheat Bread",
      "price": 1,
      "image": "https://placehold.it/150x150"
    },
    {
      "id": 3,
      "name": "Whole grain Bread",
      "price": 1,
      "image": "https://placehold.it/150x150"
    },
    {
      "id": 4,
      "name": "Rye Bread",
      "price": 1,
      "image": "https://placehold.it/150x150"
    },
  ];
}

ingredientsSelectorController.prototype = {
  toggleItem: function (item) {
    this.$log.debug('multi', this.multiSelect);
    let index = this.selectedItems.findIndex(i => i.id === item.id);
    let isMultiSelect = this.multiSelect;
    let isEmpty = this.selectedItems.length === 0;
    //It should allow multiSelect in order of the param.
    if(isMultiSelect || (!isMultiSelect && (index !== -1 || isEmpty))) {
      if (index === -1) {
          this.selectedItems.push(item);
          item.active = true;
      }else{
          this.selectedItems.splice(index,1);
          item.active = false;
      }
    }
    this.$log.info('Ingridients select', this.selectedItems);
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
      selectedItems: '='
    }
  });
