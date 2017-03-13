import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Dishes } from './dishes';
import { Admin } from '../ui/components/admin/admin';
import { MenuListItem } from '../ui/components/admin/menu-list-item';

if (Meteor.isServer) {
  describe('Dishes', () => {
    describe('methods', () => {
      const userId = Random.id();
      let dishId;

      beforeEach(() => {
        Dishes.remove({});
        dishId = Dishes.insert({
          text: 'test dish',
          createdAt: new Date(),
          owner: userId,
          username: 'kevinmccallister',
        });
      });
      it('can delete owned dish', () => {
        // Find the internal implementation of the task method so we can
        // test it in isolation
        const deleteDish = Meteor.server.method_handlers['dishes.remove'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };

        // Run the method with `this` set to the fake invocation
        deleteDish.apply(invocation, [dishId]);

        // Verify that the method does what we expected
        assert.equal(Dishes.find().count(), 0);
      });
    });
  });
}
