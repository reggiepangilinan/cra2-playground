import React, { Component } from 'react';
import styles from './App.module.scss';
import CounterContainer from './features/counter/counter.container';
import PostsContainer from './features/posts/posts.container';
import TodosContainer from './features/todos/todos.container';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      <CounterContainer/>
      <PostsContainer/>
      <TodosContainer/>
    </div>
  );
}
export default App;
