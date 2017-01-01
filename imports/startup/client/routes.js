import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../../ui/components/app'
import Menu from '../../ui/components/menu'

export default (
  <Route path="/" component={App} >
    <Route path="/menu" component={Menu}/>
  </Route>
);
