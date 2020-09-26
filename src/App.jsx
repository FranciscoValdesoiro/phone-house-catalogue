import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PhoneListContainer from './components/PhoneListContainer';

const App = () => {

  return (
    <Router>
        <p>header</p>
        <Switch>
            <Route path="/" exact>
                <PhoneListContainer />
            </Route>
            <Route path="/detail/:id" exact>
                <p>phone details</p>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
