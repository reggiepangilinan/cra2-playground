import React, { useState } from 'react';
import styles from './App.module.scss';
import Routes from '../../routes';
import { NavLink, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeContext } from '../../common/context/theme';
import Header from '../../common/components/Header';
import SideNav from '../../common/components/SideNav';
import SideNavToggleProvider from '../../common/components/SideNavToggleProvider';
import HeaderContent from '../header-content/HeaderContent';
import SideNavContent from '../sidenav-content/SideNavContent';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flip } from 'react-toastify';

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

        <ToastContainer
          className='toast-container'
          toastClassName='toast'
          hideProgressBar
          position="top-right"
          draggable={false}
          autoClose={false}
          transition={Slide}
        />

      </>
    </BrowserRouter>
  );
}
export default App;
