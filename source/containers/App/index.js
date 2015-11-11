import './App.scss';

import React, { Component, PropTypes } from 'react';

import { Styles } from 'material-ui';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state) => {
  return state;
};

const store = createStore(reducer);

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any
  }

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
