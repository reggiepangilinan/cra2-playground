import React, { useState } from 'react';
import styles from './App.module.scss';
import Routes from '../../routes';
import { NavLink, Switch, BrowserRouter } from 'react-router-dom';
import { Desktop, Tablet, Phone } from '../../common/components/Breakpoints';
import { ThemeContext } from '../../common/context/theme';
import Header from '../../common/components/Header';
import SideNav from '../../common/components/SideNav';
import SideNavToggleProvider from '../../common/components/SideNavToggleProvider';
import HeaderContent from '../header-content/HeaderContent';
import SideNavContent from '../sidenav-content/SideNavContent';



const App = () => {
  const [theme, setTheme] = useState({ current: 'default' });
  return (
    <BrowserRouter>
      <>
        <SideNavToggleProvider>
          <Header>
            <HeaderContent />
          </Header>
          <SideNav>
            <SideNavContent />
          </SideNav>
        </SideNavToggleProvider>

        <main className={styles.main}>
          <Switch>
            <Routes />
          </Switch>
        </main>

      </>
    </BrowserRouter>
  );
}
export default App;
