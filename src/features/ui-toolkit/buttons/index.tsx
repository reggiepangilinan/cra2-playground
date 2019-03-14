import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import Button from '../../../common/components/Button';
import { ButtonType, IconButtonType } from '../../../common/types';
import IconButton from '../../../common/components/IconButton';

type Props = {

}

const Buttons: FunctionComponent<Props> = () => {
  return (
    <div>
      <h3>Buttons</h3>
      <div className={styles.content}>
        <Button type={ButtonType.Primary} text="Primary" />
        <Button type={ButtonType.Secondary} text="Secondary" />
        <Button type={ButtonType.Danger} text="Danger" />
        <Button type={ButtonType.Dark} text="Dark" />
        <Button type={ButtonType.Light} text="Light" />
        <Button type={ButtonType.Link} text="Link" />
      </div>

      <h3>Icon Buttons</h3>
      <div className={styles.content}>
        <IconButton type={IconButtonType.Dark} name="menu" />
        <IconButton type={IconButtonType.Light} name="close" />
      </div>
    </div>
  )
}

export default Buttons;