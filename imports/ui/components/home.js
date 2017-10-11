import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
      <div className="bgimg-1">
        <div className="container img">
          <img alt="NasiBox" src="/nasibox_logo.svg" />
          <h1>De lekkerste indonesische gerechten thuisbezorgd</h1>
          <Link className="btn btn-primary btn-lg" to="menu" role="button">Menu</Link>
        </div>
      </div>

      <div className="home-text">
        <h2>Welkom bij Nasibox</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales justo et mauris molestie viverra. Aliquam tempus ex at feugiat mattis. Nullam dapibus faucibus tortor, eu interdum orci tincidunt sit amet. Phasellus eu placerat orci. Proin egestas enim ut felis scelerisque accumsan. Donec placerat ipsum ut purus mattis posuere. Nam.
        </p>
      </div>

      <div className="bgimg-2" />

      <div className="home-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales justo et mauris molestie viverra. Aliquam tempus ex at feugiat mattis. Nullam dapibus faucibus tortor, eu interdum orci tincidunt sit amet. Phasellus eu placerat orci. Proin egestas enim ut felis scelerisque accumsan. Donec placerat ipsum ut purus mattis posuere. Nam.</p>
      </div>

      <div className="bgimg-3" />

      <div className="home-text">
        <h2>Verse ingredienten</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales justo et mauris molestie viverra. Aliquam tempus ex at feugiat mattis. Nullam dapibus faucibus tortor, eu interdum orci tincidunt sit amet. Phasellus eu placerat orci. Proin egestas enim ut felis scelerisque accumsan. Donec placerat ipsum ut purus mattis posuere. Nam.</p>
      </div>

      <div className="bgimg-1">
        <div className="container img">
          <Link className="btn btn-primary btn-lg" to="menu" role="button">Menu</Link>
        </div>
      </div>

    </div>
  );
};

export default Home;
