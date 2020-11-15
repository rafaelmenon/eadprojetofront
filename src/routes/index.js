import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/login';
import Index from '../pages/index';
import MyAccount from '../pages/myAccount'

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" exact component={Index} isProtected />
    <Route path="/myaccount" component={MyAccount} isProtected />
  </Switch>
);

export default Routes;