import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from '../_helpers';
import { AddressBook } from '../components/AddressBook';

function App() {
  return (
    <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={ AddressBook } />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
    </div>
  );
}

export { App };