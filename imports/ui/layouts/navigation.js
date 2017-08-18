import React from 'react';
import { Link } from 'react-router';

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
            <li><a href="#">Box <span className="badge">4</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
