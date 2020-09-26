import React from 'react';
import './App.css';
import DetailContainer from './components/DetailContainer'
import PhoneListContainer from './components/PhoneListContainer'
import GuardedRoute from './components/GuardedRoute'
import HeaderComponent from './components/HeaderComponent'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector} from 'react-redux'

const App = () => {

  const phoneSelected = useSelector(state => state.phones.PhoneSelected)
  const isPhoneSelected = Object.keys(phoneSelected).length > 0;

  return (
    <Router>
        <HeaderComponent img="gs-logo.png"/>
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
