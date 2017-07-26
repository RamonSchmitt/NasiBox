import { Meteor } from 'meteor/meteor';
import { Dishes } from '../imports/api/dishes.js';

Meteor.startup(() => {
  Meteor.publish('dishes', function() {
    return Dishes.find();
  });
});
