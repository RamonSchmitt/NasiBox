import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Dishes } from '../../../api/dishes.js';

import Dish from '../dish';
import MenuListItem from './menu-list-item';

class Admin extends Component {

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Dishes.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderMenuList() {
    return this.props.dishes.map((dish) => (
        <MenuListItem key={dish._id} dish={dish} />
    ));
  }

  render() {
    return (
      <div className="container">
        <h1>Admin</h1>
          <form onSubmit={this.handleSubmit.bind(this)} className="input-group">
            <input
              className="form-control"
              type="text"
              ref="textInput"
              placeholder="nieuw gerecht"
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-default">Voeg Toe</button>
            </span>
          </form>
          <span className="menu-list">{this.renderMenuList()}</span>
      </div>
    );
  }
}

Admin.propTypes = {
  dishes: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    dishes: Dishes.find({}).fetch(),
  };
}, Admin);
