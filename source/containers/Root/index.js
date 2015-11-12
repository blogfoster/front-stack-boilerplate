import React, { Component, PropTypes } from 'react';

class Root extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div id="app">
        {this.props.children}
      </div>
    );
  }
}

export default Root;
