'use strict';

var firstObject = {
  favoriteAnimal: 'sloth',
  favoriteAnimals: [],
  sayFavoriteAnimal: function() {
    //var favoriteAnimal = 'sloth';
    this.pluralizeAnimal();
    console.log('my favorite animal is a ' + this.favoriteAnimal + '!');
  },
  pluralizeAnimal: function() {
    this.favoriteAnimal = this.favoriteAnimal + 's';
  },
  addAnimal: function(animal) {
    this.favoriteAnimals.push(animal);
  }
};
