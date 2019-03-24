import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import useSideNavToggle from '../../common/components/SideNavToggleProvider/useSideNavToggle';
import IconButton, { IconButtonKind } from '../../common/components/IconButton';
import { TabletAndSmaller } from '../../common/components/Breakpoints';
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
          <IconButton type={IconButtonKind.Dark} name="close" onClick={toggleNav} />
        </div>
      </TabletAndSmaller>

      <div className={styles.navGroup}>
        <h3>Patterns</h3>
        <div className={styles.navLinksWrapper}>
          <NavLink to="/" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Basic Counter</NavLink>
          <NavLink to="/todos" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Duck with Api Call</NavLink>
          <NavLink to="/posts" activeClassName={styles.activeNavLink} onClick={toggleNav}>Duck + Api + Nested Routes</NavLink>
          <NavLink to="/users" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Hooks with Api Call</NavLink>
          <NavLink to="/sampleform" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Formik + Yup - Sample Form</NavLink>
        </div>
      </div >


      <div className={styles.navGroup}>
        <h3>UI Toolkit</h3>
        <div className={styles.navLinksWrapper}>
          <NavLink to="/ui-toolkit/buttons" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Buttons</NavLink>
          <NavLink to="/ui-toolkit/inputs" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Inputs</NavLink>
          <NavLink to="/ui-toolkit/notifications" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Notifications</NavLink>
          <NavLink to="/ui-toolkit/table" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Table</NavLink>
          <NavLink to="/ui-toolkit/spinner" activeClassName={styles.activeNavLink} exact onClick={toggleNav}>Spinner</NavLink>
        </div>
      </div >

    </div>
  )
}
export default SideNavContent;