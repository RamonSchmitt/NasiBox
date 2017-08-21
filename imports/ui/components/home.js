import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <img alt="NasiBox" src="/nasibox_logo.svg" />
        <h1>De lekkerste indonesische gerechten thuisbezorgd</h1>
        <Link className="btn btn-primary btn-lg" to="menu" role="button">Menu</Link>
      </div>
    </div>
  );
};

export default Home;
