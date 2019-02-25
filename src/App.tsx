import React, { useState } from 'react';
import styles from './App.module.scss';
import Routes from './routes';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { Desktop, Tablet, Phone } from './styles/breakPoints';
import { ThemeContext } from './common/context/theme';


const App = () => {


  const [theme, setTheme] = useState({ current: 'default' });

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <div className={styles.container}>
          <h1>Hello</h1>

          <div>
            <button onClick={() => setTheme({ current: 'default' })}> Default</button>
            <button onClick={() => setTheme({ current: 'red' })}>Red</button>
          </div>


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
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
export default App;
