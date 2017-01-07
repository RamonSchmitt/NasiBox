import React from 'react';
import { Link, browserHistory } from 'react-router';

const Navigation = () => {
    return <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nasibox-navbar-collapse" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">NasiBox</Link>
        </div>
        <div className="collapse navbar-collapse" id="nasibox-navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/menu">Menu</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  }

export default Navigation;
