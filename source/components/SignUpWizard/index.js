import './SignUp.scss';

import React, { Component, PropTypes } from 'react';

import { Paper, CircularProgress } from 'material-ui';
import { BlogFosterLogo } from '../';

import AccountDetails from './AccountDetails';
import BloggingPreferences from './BloggingPreferences';

class SignUpWizard extends Component {
  static propTypes = {
    user: PropTypes.object,
    progressing: PropTypes.bool,
    errors: PropTypes.array,
    onSignUp: PropTypes.func,
    onPreferenceSelected: PropTypes.func,
    onPreferencesCompleted: PropTypes.func
  }

  render() {
    const {
      progressing,
    } = this.props;

    const accountStep = (
      <AccountDetails onSignUp={this.props.onSignUp} />
    );

    const bloggingPreferencesStep = (
      <BloggingPreferences onPreferenceSelected={this.props.onPreferenceSelected} onCompleted={this.props.onPreferencesCompleted} />
    );

    const progress = (
      <div className="progress-container" style={{ width: '100%', textAlign: 'center', paddingTop: 150 }}>
        <CircularProgress indeterminate />
      </div>
    );

    const stepSelector = this.props.user ? bloggingPreferencesStep : accountStep;

    const content = progressing ? progress : stepSelector;

    return (
      <div className="sign-up-wizard">
        <Paper zDepth={3}>
          <div className="content">
            <BlogFosterLogo anything="xxx" align="center" />
            <hr />
            {content}
          </div>
        </Paper>
      </div>
    );
  }
}

export default SignUpWizard;
