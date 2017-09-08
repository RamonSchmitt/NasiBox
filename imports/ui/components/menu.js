import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Dishes } from '../../api/dishes.js';

import Dish from './dish';

class App extends Component {
  renderMenu() {
    console.log(this.props.dishes);
    return this.props.dishes.map((dish) => {
      return <Dish key={dish._id} dish={dish} />;
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
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
