import React from 'react';
import ReactDOM from 'react-dom';

import routes from '../imports/startup/client/routes';
import '../imports/startup/accounts-config.js';

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('container'));
});
