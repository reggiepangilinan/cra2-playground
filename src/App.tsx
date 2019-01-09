import React, { Component } from 'react';
import styles from './App.module.scss';
import CounterContainer from './features/counter/counter.container';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      <CounterContainer/>
    </div>
  );
}
export default App;
