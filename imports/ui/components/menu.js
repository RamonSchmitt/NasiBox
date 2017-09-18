import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Dishes } from '../../api/dishes.js';

import Dish from './dish';

class App extends Component {
  renderMenu() {
    let filteredMenu = this.props.dishes;
    console.log(filteredMenu);

    return filteredMenu.map((dish) => {
      return (
        <Dish key={dish._id} dish={dish} />
      );
    });
  }

  render() {
    return (
      <div className="container menu">
        <div className="text-center category">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default active">Alle gerechten</button>
            <button type="button" className="btn btn-default">Vlees gerechten</button>
            <button type="button" className="btn btn-default">Vis gerechten</button>
            <button type="button" className="btn btn-default">Vegetarische gerechten</button>
          </div>
        </div>
        <div>
          {this.renderMenu()}
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('dishes');
  return {
    dishes: Dishes.find({ visible: true }, { sort: { title: 1 } }).fetch(),
  };
}, App);
