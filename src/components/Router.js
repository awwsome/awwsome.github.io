import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Config from 'routes/Config';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/config" component={Config} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
