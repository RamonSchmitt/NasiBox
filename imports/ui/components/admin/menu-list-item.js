import React, { Component, PropTypes } from 'react';

import { Dishes } from '../../../api/dishes.js';

export default class MenuListItem extends Component {
  deleteThisDish() {
    Dishes.remove(this.props.dish._id);
  }

  render() {
    return (
      <form className="input-group">
        <span className="form-control">{this.props.dish.text}</span>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.deleteThisDish.bind(this)}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </span>
      </form>
    );
  }
}

MenuListItem.propTypes = {
  dish: PropTypes.object.isRequired,
};
