import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from '../imports/startup/client/routes';

Meteor.startup(() => {
  ReactDOM.render(
    <Router history={browserHistory} routes={routes} />
    , document.getElementById('container'));
});
