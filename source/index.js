import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reduxReactRouter, routerStateReducer as router, ReduxRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';

import { getRoutes } from './routes';
import * as reducers from './redux/reducers';

const rootReducer = combineReducers({ router, ...reducers });

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

ReactDom.render(Root, document.getElementById('root-container'));
