import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import Button from '../../../common/components/Button';
import { ButtonKind, IconButtonKind } from '../../../common/types';
import IconButton from '../../../common/components/IconButton';

type Props = {

}

const Buttons: FunctionComponent<Props> = () => {
  return (
    <div>
      <h3>Buttons</h3>
      <div className={styles.content}>
        <Button kind={ButtonKind.Primary} text="Primary" />
        <Button kind={ButtonKind.Secondary} text="Secondary" />
        <Button kind={ButtonKind.Danger} text="Danger" />
        <Button kind={ButtonKind.Dark} text="Dark" />
        <Button kind={ButtonKind.Light} text="Light" />
        <Button kind={ButtonKind.Link} text="Link" />
      </div>

      <h3>Icon Buttons</h3>
      <div className={styles.content}>
        <IconButton type={IconButtonKind.Dark} name="menu" />
        <IconButton type={IconButtonKind.Light} name="close" />
      </div>
    </div>
  )
}

export default Buttons;