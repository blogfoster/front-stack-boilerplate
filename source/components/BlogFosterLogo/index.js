import React, {Component} from 'react';

export default class BlogFosterLogo extends Component {
  render() {
    const style = {
      width: 50,
      height: 50
    };

    return (
      <div className="blogfoster-logo-container" style={{width: '100%', textAlign: this.props.align}}>
        <img src="/images/logo.png" alt="blogfoster" style={style}/>
      </div>
    );
  }
}
