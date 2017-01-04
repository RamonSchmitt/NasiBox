import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Dishes } from '../../api/dishes.js';

import Dish from './dish';

class App extends Component {

  renderMenu() {
    return this.props.dishes.map((dish) => (
      <Dish key={dish._id} dish={dish} />
    ));
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

App.propTypes = {
  dishes: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    dishes: Dishes.find({}).fetch(),
  };
}, App);
