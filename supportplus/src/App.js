// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login'; 
import Dashboard from './dashboard'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} /> {/* Corrected component name */}
        <Route path="/dashboard" component={Dashboard} /> {/* Corrected component name */}
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default App;
