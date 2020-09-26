import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {

  return (
    <Router>
        <p>header</p>
        <Switch>
            <Route path="/" exact>
                <p>phone list</p>
            </Route>
            <Route path="/details" exact>
                <p>phone details</p>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
