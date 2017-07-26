import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Dishes } from '../../../api/dishes.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';

class Admin extends Component {
  renderMenuList() {
    return this.props.dishes.map((dish) => (
      <form className="input-group" key={dish._id}>
        <span className="form-control">{dish.text}</span>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </span>
      </form>
    ));
  }

  render() {
    return (
      <div className="container">
        <h1>Admin</h1>
          <AccountsUIWrapper />
          { this.props.currentUser ?
            <div className="row">
              <div className="col-md-3">
                menu
              </div>
              <div className="col-md-9">
                <span className="menu-list">{this.renderMenuList()}</span>
              </div>
            </div> :
            <div className="alert alert-warning" role="alert">
              Je moet inloggen om gerechten toe te voegen.
            </div>
          }
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('dishes');
  return {
    dishes: Dishes.find({}).fetch(),
    currentUser: Meteor.user(),
  };
}, Admin);
