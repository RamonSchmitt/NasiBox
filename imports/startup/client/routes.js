import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../../ui/components/app';
import Menu from '../../ui/components/menu';
import Admin from '../../ui/components/admin/admin';
import DishInfo from '../../ui/components/dish-info';

export default (
  <Route path="/" component={App} >
    <Route path="menu" component={Menu}/>
    <Route path="info" component={DishInfo}/>
    <Route path="admin" component={Admin}/>
  </Route>
);
