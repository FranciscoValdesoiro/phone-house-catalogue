import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PhoneListContainer from './components/PhoneListContainer';
import DetailContainer from './components/DetailContainer';
import HeaderComponent from './components/HeaderComponent';

const App = () => {

  return (
    <Router>
        <HeaderComponent img="gs-logo.png"/>
        <Switch>
            <Route path="/" exact>
                <PhoneListContainer />
            </Route>
            <Route path="/detail/:id" exact>
                <DetailContainer />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
