import React, { Component, PropTypes } from 'react';

import { RaisedButton, Checkbox } from 'material-ui';

class BloggingPreferences extends Component {
  static propTypes = {

  }

  render() {
    const buttonsStyle = {
      marginTop: 30,
      textAlign: 'right'
    };

    return (
      <div className="blogging-prerences">
        <div style={{ textAlign: 'center' }}>
          <h2>Blogging Preferences</h2>
        </div>
        <div style={{ height: 400, paddingTop: 50 }}>
          <ul style={{ listStyleType: 'none' }}>
            <li style={{ display: 'inline-block', paddingTop: 5, paddingBottom: 5, width: '33%' }}>
              <Checkbox
                name="food"
                value="checkboxValue1"
                label="Food blogger"/>
            </li>
            <li style={{ display: 'inline-block', paddingTop: 5, paddingBottom: 5, width: '33%' }}>
              <Checkbox
                name="fashion"
                value="checkboxValue1"
                label="Fashion blogger"/>
            </li>
            <li style={{ display: 'inline-block', paddingTop: 5, paddingBottom: 5, width: '33%' }}>
              <Checkbox
                name="food"
                value="checkboxValue1"
                label="Sports car blogger"/>
            </li>
          </ul>
        </div>
        <div style={buttonsStyle}>
          <RaisedButton label="Next" type="submit" secondary/>
        </div>
      </div>
    );
  }
}

export default BloggingPreferences;
