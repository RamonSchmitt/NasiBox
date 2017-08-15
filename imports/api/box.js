import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'box.insert': function() {
    return Box.insert({
      content: [],
      quantity: number
    });
  }
});

export const Box = new Mongo.Collection('box');
