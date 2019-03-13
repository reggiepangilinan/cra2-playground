import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import useSideNavToggle from '../../common/components/SideNavToggleProvider/useSideNavToggle';
import IconButton from '../../common/components/IconButton';
import { TabletAndSmaller } from '../../common/components/Breakpoints';
import { ButtonType } from '../../common/types';

type Props = {

}

const SideNavContent: FunctionComponent<Props> = () => {
  const { toggleSideNav } = useSideNavToggle();
  return (
    <div className={styles.content}>
      <TabletAndSmaller>
        <div className={styles.buttonWrapper}>
          <IconButton type={ButtonType.Dark} name="close" onClick={() => toggleSideNav()} />
        </div>
      </TabletAndSmaller>
    </div>
  )
}
export default SideNavContent;