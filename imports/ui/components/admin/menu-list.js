import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Dishes } from '../../../api/dishes.js';

class MenuList extends Component {
  deleteDish(dish) {
    Meteor.call('dish.remove', dish);
  }

  toggleVisibility(dish) {
    Meteor.call('dish.update', dish, { $set: { visible: !dish.visible } });
  }

  editDish() {
    console.log('edit');
  }

  renderMenuList() {
    return this.props.dishes.map((dish) => {
      const visibleClassName = dish.visible ? 'glyphicon glyphicon-eye-open' : 'glyphicon glyphicon-eye-close';

      return (
        <form className="input-group" key={dish._id}>
          <span className="form-control">{dish.title}</span>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={() => { this.editDish(dish); }}>
              <span className="glyphicon glyphicon-pencil" aria-hidden="true" />
            </button>
            <button className="btn btn-default" type="button" onClick={() => { this.toggleVisibility(dish); }}>
              <span className={visibleClassName} aria-hidden="true" />
            </button>
            <button className="btn btn-danger" type="button" onClick={() => { this.deleteDish(dish); }}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true" />
            </button>
          </span>
        </form>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Gerechten</h3>
        <span className="menu-list">{this.renderMenuList()}</span>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('dishes');
  return {
    dishes: Dishes.find({}, { sort: { title: 1 } }).fetch(),
  };
}, MenuList);
