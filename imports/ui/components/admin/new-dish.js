import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import { Dishes } from '../../../api/dishes.js';

class NewDish extends Component {
  newDish(event) {
    event.preventDefault();

    Meteor.call('dish.insert', this.refs.title.value, this.refs.price.value, this.refs.image.value);
    browserHistory.push('/admin/menu-list');
  }

  render() {
    return (
      <div>
        <h3>Nieuw Gerecht</h3>
        <form>
          <div className="form-group">
            <label htmlFor="title">Titel</label>
            <input ref="title" type="text" className="form-control" placeholder="Titel" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Prijs</label>
            <input ref="price" type="number" className="form-control" placeholder="Prijs" />
          </div>
          <div className="form-group">
            <label htmlFor="image">Afbeelding</label>
            <input ref="image" type="text" className="form-control" placeholder="Afbeelding" />
          </div>
          <div className="checkbox">
            <label htmlFor="visible">
              <input type="checkbox" />Zichtbaar
            </label>
          </div>
          <button className="btn btn-default" type="submit" onClick={this.newDish.bind(this)}>Gerecht Toevoegen</button>
        </form>
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
