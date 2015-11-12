import React, { Component, PropTypes } from 'react';

import { Checkbox } from 'material-ui';

class BloggingPreferences extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="blogging-prerences">
        <div style={{ textAlign: 'center' }}>
          <h2>Blogging Preferences</h2>
        </div>
        <div>
          <ul style={{ listStyleType: 'none' }}>
            <li style={{ display: 'inline' }}>
              <Checkbox
                name="food"
                value="checkboxValue1"
                label="Food blogger"/>
            </li>
            <li style={{ display: 'inline' }}>
              <Checkbox
                name="fashion"
                value="checkboxValue1"
                label="Fashion blogger"/>
            </li>
            <li style={{ display: 'inline' }}>
              <Checkbox
                name="food"
                value="checkboxValue1"
                label="Sports car blogger"/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BloggingPreferences;
