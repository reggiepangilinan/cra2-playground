import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import useSideNavToggle from '../../common/components/SideNavToggleProvider/useSideNavToggle';
import IconButton from '../../common/components/IconButton';
import { TabletAndSmaller } from '../../common/components/Breakpoints';
import { ButtonType } from '../../common/types';
import { NavLink } from 'react-router-dom';

type Props = {

}

const SideNavContent: FunctionComponent<Props> = () => {
  const { toggleSideNav } = useSideNavToggle();
  const toggleNav = () => toggleSideNav();
  return (
    <div className={styles.content}>

      <TabletAndSmaller>
        <div className={styles.buttonWrapper}>
          <IconButton type={ButtonType.Dark} name="close" onClick={toggleNav} />
        </div>
      </TabletAndSmaller>

      <div className={styles.navGroup}>
        <h3>Patterns</h3>
        <div className={styles.navLinksWrapper}>
          <NavLink to="/" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Counter</NavLink>
          <NavLink to="/posts" activeClassName={styles.activeNavLink} onClick={toggleNav}>Posts</NavLink>
          <NavLink to="/todos" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Todos</NavLink>
          <NavLink to="/users" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Users</NavLink>
          <NavLink to="/sampleform" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Sample Form</NavLink>
        </div>
      </div >

    </div>
  )
}
export default SideNavContent;