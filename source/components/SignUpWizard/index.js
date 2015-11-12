import './SignUp.scss';

import React, { Component, PropTypes } from 'react';

import { Paper, CircularProgress } from 'material-ui';
import { BlogFosterLogo } from '../';

import AccountDetails from './AccountDetails';

class SignUpWizard extends Component {
  static propTypes = {
    user: PropTypes.object,
    progressing: PropTypes.bool,
    onSignUp: PropTypes.func
  }

  render() {
    const {
      progressing
    } = this.props;

    const currentStep = (
      <AccountDetails onSignUp={this.props.onSignUp} />
    );

    const progress = (
      <div className="progress-container" style={{ width: '100%', textAlign: 'center', paddingTop: 150 }}>
        <CircularProgress indeterminate />
      </div>
    );

    const content = progressing ? progress : currentStep;

    return (
      <div className="sign-up-wizard">
        <Paper zDepth={3}>
          <div className="content">
            <BlogFosterLogo align="center" />
            <hr />
            {content}
          </div>
        </Paper>
      </div>
    );
  }
}

export default SignUpWizard;
