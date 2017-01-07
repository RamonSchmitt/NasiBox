import React, { Component, PropTypes } from 'react';

export default class Dish extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src="..." alt={this.props.dish.text}/>
          <div className="caption">
            <h3>{this.props.dish.text}</h3>
            <p>prijs</p>
            <p><a href="#" className="btn btn-primary" role="button">bestel</a> <a href="#" className="btn btn-default" role="button">Info</a></p>
          </div>
        </div>
      </div>
    );
  }
}

Dish.propTypes = {
  dish: PropTypes.object.isRequired,
};
