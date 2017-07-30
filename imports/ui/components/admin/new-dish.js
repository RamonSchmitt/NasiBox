import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Dishes } from '../../../api/dishes.js';

class NewDish extends Component {
  newDish(event) {
    event.preventDefault();

    Meteor.call('dish.insert');
  }

  render() {
    return (
      <div className="col-md-9">
        <h3>Nieuw Gerecht</h3>
        <button className="btn btn-default" type="submit" onClick={this.newDish.bind(this)}>Gerecht Toevoegen</button>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('dishes');
  return {
    dishes: Dishes.find({}).fetch(),
  };
}, NewDish);
