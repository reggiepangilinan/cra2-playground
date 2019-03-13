import React, { useState } from 'react';
import styles from './App.module.scss';
import Routes from '../../routes';
import { NavLink, Switch, BrowserRouter } from 'react-router-dom';
import { Desktop, Tablet, Phone } from '../../common/components/Breakpoints';
import { ThemeContext } from '../../common/context/theme';
import Header from '../../common/components/Header';
import SideNav from '../../common/components/SideNav';
import SideNavToggleHandler from '../../common/components/SideNavToggleHandler';


const App = () => {
  const [theme, setTheme] = useState({ current: 'default' });

  return (
    <BrowserRouter>
      <>
        <Header />
        <SideNav />
        <main className={styles.main}>
          <Switch>
            {/* <Routes /> */}
          </Switch>
        </main>
      </>
    </BrowserRouter>
  );
}
export default App;
