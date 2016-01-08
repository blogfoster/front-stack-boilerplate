import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../actions';

import {
  SignUpWizard
} from '../../components';

class SignUp extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    application: PropTypes.object
  };

  onSignUp(errors, account) {
    const { dispatch } = this.props;

    dispatch(signUp(account));
  }

  render() {
    return (
      <div>
        <SignUpWizard onSignUp={::this.onSignUp} {...this.props.application} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application
  };
};

export default connect(mapStateToProps)(SignUp);
