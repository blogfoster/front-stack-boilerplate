import './SignUp.scss';

import React, {Component} from 'react';

import {Paper} from 'material-ui';
import {BlogFosterLogo} from '../';

import AccountDetails from './AccountDetails';

export default class HelloWorld extends Component {
  render() {
    return (
      <div className="sign-up-wizard">
        <Paper zDepth={3}>
          <div className="content">
            <BlogFosterLogo align="center"></BlogFosterLogo>
            <hr />
            <AccountDetails />
          </div>
        </Paper>
      </div>
    );
  }
}
