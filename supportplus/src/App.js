// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login'; 
import Dashboard from './dashboard'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} /> 
        <Route path="/dashboard" component={Dashboard} /> 
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default App;
