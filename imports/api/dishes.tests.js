import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Dishes } from './dishes.js';

if (Meteor.isServer) {
  describe('Dishes', () => {
    describe('methods', () => {
      const userId = Random.id();
      let dishId;

      beforeEach(() => {
        Dishes.remove({});
        dishId = Dishes.insert({
          title: 'test dish',
          price: 1,
          image: 'test image',
          category: 'vlees',
          visible: true,
        });
      });

      it('can delete owned dish', () => {
        const deleteDish = Meteor.server.method_handlers['dish.remove'];
        const invocation = { userId };

        deleteDish.apply(invocation, [dishId]);

        assert.equal(Dishes.find().count(), 0);
      });
    });
  });
}
