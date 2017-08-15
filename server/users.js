import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
  'createUserAccount': function(newUserData) {
    return Accounts.createUser(newUserData);
  }
});
