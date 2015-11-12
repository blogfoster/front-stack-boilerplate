import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../redux/actions';

import {
  SignUpForm
} from '../../components';

class SignUp extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    application: PropTypes.object
  }

  onSignUp(errors, account) {
    const { dispatch } = this.props;

    console.log('dispatching', account);

    //dispatch(signUp(account));
  }

  render() {
    return (
      <div>
        <SignUpForm onSignUp={::this.onSignUp} />
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
