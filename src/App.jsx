import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import DetailContainer from './components/DetailContainer';
import GuardedRoute from './components/GuardedRoute';
import HeaderComponent from './components/HeaderComponent';
import PhoneListContainer from './components/PhoneListContainer';


const App = () => {

  const phoneSelected = useSelector(state => state.phones.PhoneSelected)
  const isPhoneSelected = Object.keys(phoneSelected).length > 0;

  return (
    <Router>
        <HeaderComponent img="fv-logo.png"/>
        <Switch>
            <Route path="/" exact>
                <PhoneListContainer />
            </Route>
            <GuardedRoute 
              auth={isPhoneSelected}
              component={DetailContainer} 
              path="/detail/:id"
            />
        </Switch>
    </Router>
  );
}

export default App;
