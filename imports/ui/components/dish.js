import React from 'react';
import { Link } from 'react-router';

const Dish = (props) => {
  return <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src={props.dish.image} alt={props.dish.title} />
      <div className="caption">
        <h3>{props.dish.title}</h3>
        <p>{props.dish.price} euro</p>
        <p><Link to="order" className="btn btn-primary" role="button">bestel</Link> <Link to="info" className="btn btn-default" role="button">Info</Link></p>
      </div>
    </div>
  </div>
}

export default Dish;
