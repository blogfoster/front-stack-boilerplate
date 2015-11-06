import React, {Component} from 'react';
import styles from './HelloWorld.scss';

export default class HelloWorld extends Component {
  render() {
    console.log(styles);

    return (
      <h1 className={styles.hello}>HelloWorld</h1>
    );
  }
}
