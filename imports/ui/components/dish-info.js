import React from 'react';
import { Link } from 'react-router';


const DishInfo = (props) => {
  console.log(props)
  return <div className="container">
      <h1>Hello from dish info</h1>
      <Link to="menu" className="btn btn-default" role="button">Terug naar het hoofdmenu</Link>
    </div>
}

export default DishInfo;
