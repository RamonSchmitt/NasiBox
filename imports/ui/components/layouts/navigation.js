import React, { Component } from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import UserLogin from '../accounts/user-login';

class Navigation extends Component {
  logout = () => {
    event.preventDefault();
    Meteor.logout();
  }

  render() {
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
              { this.props.currentUser ?
                ([<li key="box"><Link to="order">Box <span className="badge">4</span></Link></li>,
                  <li key="logout"><Link onClick={this.logout} to="#">Meld af</Link></li>]) :
                ([<li key="create-account"><Link to="create-account">Schrijf in</Link></li>,
                  <UserLogin key="logout" />])
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  };
}, Navigation);
