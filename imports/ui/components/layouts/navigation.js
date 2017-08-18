import React from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from '../admin/AccountsUIWrapper.js';

const Navigation = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nasibox-navbar-collapse" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className="navbar-brand" to="/"><img alt="NasiBox" src="/nasibox_logo.svg" /></Link>
        </div>
        <div className="collapse navbar-collapse" id="nasibox-navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="menu">Menu</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">Box <span className="badge">4</span></a>
            </li>
            <li><AccountsUIWrapper /></li>
            <li>
              <Link to="create-account">Schrijf in</Link>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Meld aan<span className="caret" /></a>
              <div className="dropdown-menu">
                <input type="text" className="form-control" placeholder="Gerbruikersnaam" />
                <input type="text" className="form-control" placeholder="Wachtwoord" />
                <button type="submit" className="btn btn-primary col-xs-12 col-sm-12">Submit</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, Navigation);
