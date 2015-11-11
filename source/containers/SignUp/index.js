import React, { Component, PropTypes } from 'react';

import {
  SignUpForm
} from '../../components';

class SignUp extends Component {
  static contextTypes = {
    store: PropTypes.any,
    history: PropTypes.object.isRequired
  }

  handleSignUp() {
    // const { history, store } = this.context;
  }

  render() {
    const { history, store } = this.context;

    console.log(store.getState());

    return (
      <div>
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;
