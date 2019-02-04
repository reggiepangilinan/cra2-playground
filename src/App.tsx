import React from 'react';
import styles from './App.module.scss';
import Routes from './routes';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { Desktop, Tablet, Phone } from './styles/breakPoints';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <h1>Hello</h1>

        <Desktop>
          Desktop
        </Desktop>
        
        <Tablet>
          Tablet
        </Tablet>

        <Phone>
          Phone
        </Phone>
        
        <br></br>
        <br></br>

        <nav className={styles.menu}>
          <NavLink to="/" activeClassName={styles.activeLink} exact>Counter</NavLink>
          <NavLink to="/posts" activeClassName={styles.activeLink}>Posts</NavLink>
          <NavLink to="/todos" activeClassName={styles.activeLink} exact>Todos</NavLink>
          <NavLink to="/users" activeClassName={styles.activeLink} exact>Users</NavLink>
          <NavLink to="/sampleform" activeClassName={styles.activeLink} exact>Sample Form</NavLink>
        </nav>
        <Routes />
      </div>
    </BrowserRouter>
  );
}
export default App;
