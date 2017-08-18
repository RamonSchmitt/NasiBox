import React, { Component } from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

class Admin extends Component {
  render() {
    return (
      <div className="container">
        <h1>Admin</h1>
        { this.props.currentUser ?
          <div className="row">
            <div className="col-md-3">
              <div className="btn-group-vertical" role="group" aria-label="admin-menu">
                <Link to="/admin/menu-list" type="button" className="btn btn-default">Menu</Link>
                <Link to="/admin/new-dish" type="button" className="btn btn-default">Nieuw Gerecht</Link>
              </div>
            </div>
            <div className="col-md-9">
              {this.props.children}
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
  return {
    currentUser: Meteor.user(),
  };
}, Admin);
