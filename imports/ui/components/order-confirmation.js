import React from 'react';
import { Link } from 'react-router';

const OrderConfirmation = () => {
  return (
    <div className="container">
      <h1>Hello from order confirmation</h1>
      <Link to="menu" className="btn btn-default" role="button">Terug naar het hoofdmenu</Link>
    </div>
  );
};

export default OrderConfirmation;
