import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TasksPage from '../TasksPage';
import NotFound from '../NotFound/Component';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TasksPage}/>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route component={NotFound}/>
  </Switch>
);

export default Routes;