import React from 'react';
import styles from './App.module.scss';
import Routes from './routes';
import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      <nav className={styles.menu}>
        <NavLink to="/" activeClassName={styles.activeLink} exact>Counter</NavLink>
        <NavLink to="/posts" activeClassName={styles.activeLink}>Posts</NavLink>
        <NavLink to="/todos" activeClassName={styles.activeLink} exact>Todos</NavLink>
      </nav>
      <Routes />
    </div>
  );
}
export default App;
