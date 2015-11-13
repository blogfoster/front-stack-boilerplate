import React from 'react';
import { Route } from 'react-router';

import {
  App,
  SignUp,
  Root
} from '../containers';

export const getRoutes = (/* { dispatch, getState } */) => {
  const routes = (
    <Route path="/" component={Root}>
      <Route path="" component={App} />
      <Route path="signup" component={SignUp} />
    </Route>
  );

  return routes;
};
