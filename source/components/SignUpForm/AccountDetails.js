import React, { Component, PropTypes } from 'react';

import { TextField } from 'material-ui';
import { RaisedButton } from 'material-ui';

class AccountDetails extends Component {
  static propTypes = {
    onSignUp: PropTypes.func
  }

  onSubmitted(evt) {
    evt.preventDefault();

    this.props.onSignUp(null, {});
  }

  render() {
    const fieldsStyle = {
      width: 50 + '%',
      display: 'block',
      float: 'right'
    };

    const buttonsStyle = {
      marginTop: 30,
      textAlign: 'right'
    };

    return (
      <form onSubmit={::this.onSubmitted}>
        <div className="fields cf">
          <div style={fieldsStyle}>
            <div className="details">
              <TextField hintText="What's your first name?" floatingLabelText="First Name" />
              <TextField hintText="What's your last name?" floatingLabelText="Last Name" />
              <TextField hintText="Where is you blog hosted?" floatingLabelText="Blog URL" />
            </div>
            <div className="password" style={{ marginTop: '20px' }}>
              <TextField hintText="Secret password" floatingLabelText="Password" />
              <TextField hintText="Secret password repeated" floatingLabelText="Repeat Password" />
            </div>
          </div>
        </div>

        <div className="buttons cf">
          <div style={buttonsStyle}>
            <RaisedButton label="Next" type="submit" secondary/>
          </div>
        </div>
      </form>
    );
  }
}

export default AccountDetails;
