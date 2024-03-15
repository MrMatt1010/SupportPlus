// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import OpenTickets from './openTickets';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="//openTickets" component={OpenTickets} />
        {/* Add more routes if needed */}
      </Switch>
    </Router>
  );
};

export default App;
