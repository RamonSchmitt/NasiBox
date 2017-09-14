import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import { Dishes } from '../../../api/dishes.js';

class NewDish extends Component {
  constructor() {
    super();

    this.newDish = this.newDish.bind(this);
  }

  newDish(event) {
    event.preventDefault();

    Meteor.call('dish.insert',
      this.title.value,
      this.price.value,
      this.image.value,
      this.category.value,
      this.visible.checked);
    browserHistory.push('/admin/menu-list');
  }

  render() {
    return (
      <div>
        <h3>Nieuw Gerecht</h3>
        <form>
          <div className="form-group">
            <label htmlFor="title">Titel</label>
            <input
              ref={(title) => { this.title = title; }}
              type="text"
              className="form-control"
              placeholder="Titel"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Prijs</label>
            <input
              ref={(price) => { this.price = price; }}
              type="number"
              className="form-control"
              placeholder="Prijs"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Afbeelding</label>
            <input
              ref={(image) => { this.image = image; }}
              type="text"
              className="form-control"
              placeholder="Afbeelding"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Categorie</label>
            <select className="form-control" ref={(category) => { this.category = category; }}>
              <option>Vlees</option>
              <option>Vis</option>
              <option>Vegetarisch</option>
            </select>
          </div>
          <div className="checkbox">
            <label htmlFor="visible" />
            <input
              ref={(visible) => { this.visible = visible; }}
              type="checkbox"
              defaultChecked
            />
            Zichtbaar
          </div>
          <button className="btn btn-default" type="submit" onClick={this.newDish}>Gerecht Toevoegen</button>
        </form>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('dishes');
  return {
    dishes: Dishes.find({}, { sort: { title: 1 } }).fetch(),
  };
}, NewDish);
