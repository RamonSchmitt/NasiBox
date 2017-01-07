import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Dishes } from '../../api/dishes.js';

import Dish from './dish';

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

  deleteThisDish() {
    console.log(this.props.dish._id);
//    Dishes.remove(this.props.dish._id);
  }

  renderMenuList() {
    return this.props.dishes.map((dish) => (
      <li className="list-group-item" key={dish._id}>
        <div className="input-group">
        {dish.text}
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.deleteThisDish.bind(this)}>Verwijder</button>
          </span>
        </div>
      </li>
    ));
  }

  render() {
    return (
      <div className="container">
        <h1>Admin</h1>
          <ul className="list-group">
            <li className="list-group-item">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                  type="text"
                  ref="textInput"
                  placeholder="nieuw gerecht"
                />
              </form>
            </li>
            {this.renderMenuList()}
          </ul>
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
