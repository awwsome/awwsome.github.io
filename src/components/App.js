import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from 'routes/Home';
import List from 'routes/List';
import Config from 'routes/Config';
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/musclebook" component={List} />
        <Route exact path="/config" component={Config} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
