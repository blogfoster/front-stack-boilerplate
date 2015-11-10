import './App.scss';

import React, {Component} from 'react';

import {Styles} from 'material-ui';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

let reducer = (state, action) => {
  return state;
};

let store = createStore(reducer);

export default class App extends Component {
  render() {
    const style = {
      backgroundColor: Styles.Colors.redA400
    };

    return (
      <Provider store={store}>
        <div id="app" style={style}>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}
