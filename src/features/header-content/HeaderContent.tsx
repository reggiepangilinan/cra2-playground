import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import useSideNavToggle from '../../common/components/SideNavToggleProvider/useSideNavToggle';
import IconButton, { IconButtonKind } from '../../common/components/IconButton';
import { TabletAndSmaller } from '../../common/components/Breakpoints';

type Props = {

}

const HeaderContent: FunctionComponent<Props> = () => {
  const { toggleSideNav } = useSideNavToggle();
  return (
    <div className={styles.content}>
      <h3>
        CRA2 Playground
      </h3>
      <TabletAndSmaller>
        <div className={styles.buttonWrapper}>
          <IconButton type={IconButtonKind.Light} onClick={() => toggleSideNav()} name="menu" />
        </div>
      </TabletAndSmaller>
    </div>
  )
}
export default HeaderContent;