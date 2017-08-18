import { Mongo } from 'meteor/mongo';

const Box = new Mongo.Collection('box');

Meteor.methods({
  'box.insert': function () {
    return Box.insert({
      content: [],
      quantity: number,
    });
  },
});

export default Box;
