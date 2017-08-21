import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

const Admin = (props) => {
  return (
    <div className="container">
      <h1>Admin</h1>
      { props.currentUser ?
        <div className="row">
          <div className="col-md-3">
            <div className="btn-group-vertical" role="group" aria-label="admin-menu">
              <Link to="/admin/menu-list" type="button" className="btn btn-default">Menu</Link>
              <Link to="/admin/new-dish" type="button" className="btn btn-default">Nieuw Gerecht</Link>
            </div>
          </div>
          <div className="col-md-9">
            {props.children}
          </div>
        </div> :
        <div className="alert alert-warning" role="alert">
          Je moet inloggen om gerechten toe te voegen.
        </div>
      }
    </div>
  );
};

Admin.propTypes = {
  currentUser: PropTypes.shape({
    _id: String,
    username: String,
  }).isRequired,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  };
}, Admin);
