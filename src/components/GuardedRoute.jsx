import React from 'react';
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({auth, component: Component, path}) => {
  return (
    <Route path={path} render={(props) => (
        
        auth ? <Component {...props} />
        : <Redirect to='/' />
    
    )} />
  )           
}

export default GuardedRoute;
