import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const DishSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 128,
  },
  price: {
    type: Number,
    label: 'Price',
    min: 0,
  },
  image: {
    type: String,
    label: 'Image',
    optional: true,
  },
  visible: {
    type: Boolean,
    label: 'Visible',
  },
});

Meteor.methods({
  'dish.insert': function (title, price, image, visible) {
    return Dishes.insert({
      title,
      price,
      image,
      visible,
    });
  },

  'dish.update': function (dish, update) {
    return Dishes.update(dish, update);
  },

  'dish.remove': function (dish) {
    return Dishes.remove(dish);
  },
});

const Dishes = new Mongo.Collection('dishes');

// Dishes.attachSchema(DishSchema);

export { Dishes };
