import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../../ui/components/app';
import Menu from '../../ui/components/menu';
import DishInfo from '../../ui/components/dish-info';
import OrderConfirmation from '../../ui/components/order-confirmation';

import Admin from '../../ui/components/admin/admin';
import MenuList from '../../ui/components/admin/menu-list';
import NewDish from '../../ui/components/admin/new-dish';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="menu" component={Menu} />
      <Route path="info" component={DishInfo} />
      <Route path="order" component={OrderConfirmation} />

      <Route path="admin" component={Admin}>
        <IndexRoute component={MenuList} />
        <Route path="menu-list" component={MenuList} />
        <Route path="new-dish" component={NewDish} />
      </Route>
    </Route>
  </Router>
);
