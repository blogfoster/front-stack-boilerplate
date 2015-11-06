import React, {Component} from 'react';
import styles from './HelloWorld.scss';

export default class HelloWorld extends Component {
  render() {
    return (
      <h1 className={styles.hello} style={{color: 'red'}}>Hello World!</h1>
    );
  }
}
