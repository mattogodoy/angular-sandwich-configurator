function ingredientsSelectorController($log, $scope) {
  var that = this;

  this.$log = $log;
  this.$scope = $scope;
  this.selectedItems = [];

  $scope.$on('randomize', function (e, order) {
    that.randomize();
  });
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
      this.$scope.$emit('ingredientChange', this.ingredientType, this.selectedItems);
    }
    this.$log.debug('ingredients select', this.selectedItems);
  },

  reset: function () {
    var that = this;

    while (this.selectedItems.length) {
      that.toggleItem(this.selectedItems[0]);
    }
  },

  randomize: function () {
    var len = this.ingredients.length;
    var random = Math.floor((Math.random() * len));
    var ingredient = this.ingredients[random];
    var that = this;

    this.reset();

    if (this.multiSelect) {
      // Get the possible combinations of ingredients
      var possibleCombinations = Math.pow(this.ingredients.length, 2);

      // Get a random combination
      var multiRandom = Math.floor((Math.random() * (possibleCombinations - 1)));

      // Convert the combination from int to binary
      multiRandom = (multiRandom >>> 0).toString(2);

      // Add 0's to prepend the number so we always have number of digits == this.ingredients.length
      while (multiRandom.length < this.ingredients.length) {
        multiRandom = '0' + multiRandom;
      }

      // Convert the binary combination to an array
      multiRandom = multiRandom.split('');

      // Iterate the array. If the value is 1, add the ingredient
      multiRandom.forEach(function (val, i) {
        if (parseInt(val, 10)) {
          that.toggleItem(that.ingredients[i]);
        }
      });
    } else {
      this.toggleItem(ingredient);
    }
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
      ingredientType: '@'
    }
  });
