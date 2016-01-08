import './App.scss';

import React, { Component, PropTypes } from 'react';

import { Styles } from 'material-ui';

class App extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    const style = {
      backgroundColor: Styles.Colors.redA400
    };

    return (
      <div id="app" style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
