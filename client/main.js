import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from '../imports/startup/client/routes';
import '../imports/startup/accounts-config.js';

Meteor.startup(() => {
  ReactDOM.render(
    <Router history={browserHistory} routes={routes} />
    , document.getElementById('container'));
});
