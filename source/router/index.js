import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';

import Router, {Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import {
  App,
  SignUp
} from '../containers';

const Routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <Route path="sign-up" component={SignUp}></Route>
    </Route>
  </Router>
);

ReactDom.render(Routes, document.getElementById('main'));
