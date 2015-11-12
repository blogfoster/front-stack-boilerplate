import './SignUp.scss';

import React, { Component, PropTypes } from 'react';

import { Paper } from 'material-ui';
import { BlogFosterLogo } from '../';

import AccountDetails from './AccountDetails';

class SignUpForm extends Component {
  static propTypes = {
    onSignUp: PropTypes.func
  }

  render() {
    return (
      <div className="sign-up-wizard">
        <Paper zDepth={3}>
          <div className="content">
            <BlogFosterLogo align="center" />
            <hr />
            <AccountDetails onSignUp={this.props.onSignUp} />
          </div>
        </Paper>
      </div>
    );
  }
}

export default SignUpForm;
