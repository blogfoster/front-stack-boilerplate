import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  SignUpForm
} from '../../components';

class SignUp extends Component {
  static contextTypes = {
    store: PropTypes.any,
    history: PropTypes.object.isRequired
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <SignUpForm />
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
