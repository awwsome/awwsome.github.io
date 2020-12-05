import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Config from 'routes/Config';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/config" component={Config} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
