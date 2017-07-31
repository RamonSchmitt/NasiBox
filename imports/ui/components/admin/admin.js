import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.js';

class Admin extends Component {
  render() {
    return (
      <div className="container">
        <h1>Admin</h1>
          <AccountsUIWrapper />
          { this.props.currentUser ?
            <div className="row">
              <div className="col-md-3">
                <div className="btn-group-vertical" role="group" aria-label="...">
                  <LinkContainer to="/admin/new-dish">
                    <button type="button" className="btn btn-default">Nieuw Gerecht</button>
                  </LinkContainer>
                  <LinkContainer to="/admin/menu-list">
                    <button type="button" className="btn btn-default">Menu</button>
                  </LinkContainer>
                </div>
              </div>
              {this.props.children}
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
