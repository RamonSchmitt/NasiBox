import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Dishes } from '../../../api/dishes.js';

class MenuList extends Component {
  deleteThisDish(dish) {
    Meteor.call('dish.remove', dish);
  }

  hideThisDish() {
    console.log("hide");
  }

  editThisDish() {
    console.log("edit");
  }

  renderMenuList() {
    return this.props.dishes.map((dish) => (
      <form className="input-group" key={dish._id}>
        <span className="form-control">{dish.title}</span>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={() => this.editThisDish(dish)}>
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          </button>
          <button className="btn btn-default" type="button" onClick={() => this.hideThisDish(dish)}>
            <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
          </button>
          <button className="btn btn-danger" type="button" onClick={() => this.deleteThisDish(dish)}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </span>
      </form>
    ));
  }

  render() {
    return (
      <div className="col-md-9">
        <h3>Gerechten</h3>
        <span className="menu-list">{this.renderMenuList()}</span>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('dishes');
  return {
    dishes: Dishes.find({}).fetch(),
  };
}, MenuList);
