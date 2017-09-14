import { Mongo } from 'meteor/mongo';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Dishes = new Mongo.Collection('dishes');

// const DishSchema = new SimpleSchema({
//   title: {
//     type: String,
//     label: 'Title',
//     max: 128,
//   },
//   price: {
//     type: Number,
//     label: 'Price',
//     min: 0,
//   },
//   image: {
//     type: String,
//     label: 'Image',
//     optional: true,
//   },
//   category: {
//     type: String,
//     label: 'Category',
//   },
//   visible: {
//     type: Boolean,
//     label: 'Visible',
//   },
// });

// Dishes.attachSchema(DishSchema);

Meteor.methods({
  'dish.insert': function (title, price, image, category, visible) {
    return Dishes.insert({
      title,
      price,
      image,
      category,
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

export { Dishes };
