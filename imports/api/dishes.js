import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'dish.insert': function() {
    return Dish.insert({
      title: '',
      price: number,
      image: ''
    });
  },

  'dish.remove': function(dish) {
    return Dish.remove(dish)
  }
});

export const Dishes = new Mongo.Collection('dishes');
