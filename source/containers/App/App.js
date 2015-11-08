import './App.scss';

import React, {Component} from 'react';
import {SignUp} from '../../components';

import {Styles} from 'material-ui';

export default class App extends Component {
  render() {
    const style = {
      backgroundColor: Styles.Colors.redA400
    };

    return (
      <div style={style}>
        <SignUp></SignUp>
      </div>
    );
  }
}
