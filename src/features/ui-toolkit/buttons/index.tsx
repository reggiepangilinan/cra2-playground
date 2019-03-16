import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import Button, { ButtonKind } from '../../../common/components/Button';
import IconButton, { IconButtonKind } from '../../../common/components/IconButton';

type Props = {

}

const Buttons: FunctionComponent<Props> = () => {
  return (
    <div>
      <h2>Buttons</h2>
      <div className={styles.content}>
        <Button kind={ButtonKind.Primary} text="Primary" />
        <Button kind={ButtonKind.Secondary} text="Secondary" />
        <Button kind={ButtonKind.Danger} text="Danger" />
        <Button kind={ButtonKind.Dark} text="Dark" />
        <Button kind={ButtonKind.Light} text="Light" />
        <Button kind={ButtonKind.Link} text="Link" />
      </div>

      <h2>Icon Buttons</h2>
      <div className={styles.content}>
        <IconButton type={IconButtonKind.Dark} name="menu" />
        <IconButton type={IconButtonKind.Light} name="close" />
      </div>
    </div>
  )
}

export default Buttons;