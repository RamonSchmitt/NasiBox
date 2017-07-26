import React from 'react';
import { Link } from 'react-router';

const Dish = (props) => {
  return <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src="http://res.cloudinary.com/ramonschmitt/image/upload/v1466768718/epzbutc8zwwtdqzkxrm7.jpg" alt={props.dish.text} />
      <div className="caption">
        <h3>{props.dish.text}</h3>
        <p>prijs</p>
        <p><Link to="order" className="btn btn-primary" role="button">bestel</Link> <Link to="info" className="btn btn-default" role="button">Info</Link></p>
      </div>
    </div>
  </div>
}

export default Dish;
