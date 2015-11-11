import './HelloWorld.scss';

import React, { Component } from 'react';

import { Paper } from 'material-ui';

class HelloWorld extends Component {
  render() {
    return (
      <div className="sign-up-wizard">
        <Paper zDepth={1}>
          <div className="content">Content</div>
        </Paper>
      </div>
    );
  }
}

export default HelloWorld;
