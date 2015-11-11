import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';

import { Route } from 'react-router';
import { reduxReactRouter, routerStateReducer as router, ReduxRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';

import { Provider } from 'react-redux';
import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  App,
  SignUp
} from '../containers';

const initialState = {
  application: {
    currentUser: null
  }
};

const reducer = (state = initialState) => {
  return state;
};

const rootReducer = combineReducers({
  reducer,
  router
});

const getRoutes = ({ dispatch, getState }) => {
  function requireAuth(nextState, replaceState) {
    // console.log(getState());
  }

  return (
    <Route path="/" component={App}>
      <Route path="sign-up" component={SignUp} />
      <Route path="account" onEnter={requireAuth} />
    </Route>
  );
};

const configureStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({
    getRoutes,
    createHistory
  })
)(createStore);

const store = configureStore(rootReducer);

const Root = (
  <Provider store={store}>
    <ReduxRouter />
  </Provider>
);

ReactDom.render(Root, document.getElementById('main'));
