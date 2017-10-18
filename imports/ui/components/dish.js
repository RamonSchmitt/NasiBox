import React from 'react';
import { Link } from 'react-router';

const Dish = (props) => {
  const { image, title, price } = props.dish;

  return (
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img src={image} alt={title} />
        <div className="caption">
          <h3>{title}</h3>
          <p>{price} euro</p>
          <Link to="order" className="btn btn-primary" role="button">bestel</Link> <Link to="info" className="btn btn-default" role="button">Info</Link>
        </div>
      </div>
    </div>
  );
};

export default Dish;
