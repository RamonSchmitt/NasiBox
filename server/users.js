import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  createUserAccount: function (newUserData) {
    const { password } = newUserData;

    if (password.length < 8) {
      throw new Meteor.Error(403, 'Password is too short.');
    }
    Accounts.createUser(newUserData);
  },
});
