/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage       from './containers/HomePage'
import FormPage  from './containers/FormPage'
import ProfilePage    from './containers/ProfilePage'

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/NewClient" component={FormPage}/>
      <Route path="/Profile/:id" component={ProfilePage}/>
    </Switch>
  </App>
);
