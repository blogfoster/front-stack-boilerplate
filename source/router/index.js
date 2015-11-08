import React from 'react';
import ReactDom from 'react-dom';

import Router, {Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import {App} from '../containers';

let renderRoutes = (element) => {
  const Routes = (
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App}></Route>
    </Router>
  );

  ReactDom.render(Routes, element);
};

let root = document.getElementById('main');

renderRoutes(root);
