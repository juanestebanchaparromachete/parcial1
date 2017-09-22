import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Admin from './components/Admin';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
  </Router>
);

export default Routes;