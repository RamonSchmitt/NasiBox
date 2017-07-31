import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

var Schemas = {};

Schemas.Dish = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 128
  },
  price: {
    type: SimpleSchema.Integer,
    label: "Price",
    min: 0
  },
  image: {
    type: String,
    label: "image",
    optional: true
  }
});

// Dishes.attachSchema(Schemas.Dishes);

Meteor.methods({
  'dish.insert': function(title, price, image) {
    return Dishes.insert({
      title: title,
      price: price,
      image: image
    });
  },

  'dish.remove': function(dish) {
    return Dishes.remove(dish)
  }
});

export const Dishes = new Mongo.Collection('dishes');
