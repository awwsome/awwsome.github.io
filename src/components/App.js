import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from 'routes/Home';
import List from 'routes/List';
import Config from 'routes/Config';
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/config" component={Config} />
    </Switch>
  );
};

export default App;
