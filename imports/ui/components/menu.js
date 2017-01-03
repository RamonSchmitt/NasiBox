import React, { Component } from 'react';

import Dish from './dish';

export default class Menu extends Component {
  getDishes() {
    return [
      { _id: 1, text: 'Nasi Goreng'},
      { _id: 2, text: 'Rendang'},
      { _id: 3, text: 'Soto Ayam'},
      { _id: 4, text: 'Pepesan'}
    ];
  }

  renderMenu() {
    return this.getDishes().map((dish) => (
      <Dish key={dish._id} dish={dish} />
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderMenu()}
        </div>
      </div>
    );
  }
}
