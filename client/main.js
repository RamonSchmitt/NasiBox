import ReactDOM from 'react-dom';

import routes from '../imports/startup/client/routes';
import '../imports/startup/accounts-config';

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('render-target'));
});
