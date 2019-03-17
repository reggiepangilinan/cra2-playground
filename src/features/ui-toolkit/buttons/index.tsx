import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import Button, { ButtonKind } from '../../../common/components/Button';
import IconButton, { IconButtonKind } from '../../../common/components/IconButton';

type Props = {

}


const onClick = (message: string) => {
  alert(message);
}

const Buttons: FunctionComponent<Props> = () => {
  return (
    <div>
      <h2>Buttons</h2>
      <div className={styles.content}>
        <Button kind={ButtonKind.Primary} text="Primary" onClick={() => onClick('Primary')} />
        <Button kind={ButtonKind.Secondary} text="Secondary" onClick={() => onClick('Secondary')} />
        <Button kind={ButtonKind.Danger} text="Danger" onClick={() => onClick('Danger')} />
        <Button kind={ButtonKind.Dark} text="Dark" onClick={() => onClick('Dark')} />
        <Button kind={ButtonKind.Light} text="Light" onClick={() => onClick('Light')} />
        <Button kind={ButtonKind.Link} text="Link" onClick={() => onClick('Link')} />

      </div>

      <h2>Disabled Buttons</h2>
      <div className={styles.content}>
        <Button kind={ButtonKind.Primary} text="Primary" disabled onClick={() => onClick('Primary')} />
        <Button kind={ButtonKind.Secondary} text="Secondary" disabled onClick={() => onClick('Secondary')} />
        <Button kind={ButtonKind.Danger} text="Danger" disabled onClick={() => onClick('Danger')} />
        <Button kind={ButtonKind.Dark} text="Dark" disabled onClick={() => onClick('Dark')} />
        <Button kind={ButtonKind.Light} text="Light" disabled onClick={() => onClick('Light')} />
        <Button kind={ButtonKind.Link} text="Link" disabled onClick={() => onClick('Link')} />
      </div>

      <h2>Icon Buttons</h2>
      <div className={styles.content}>
        <IconButton type={IconButtonKind.Dark} name="menu" />
        <IconButton type={IconButtonKind.Light} name="close" />
      </div>


      <h2>Disabled Icon Buttons</h2>
      <div className={styles.content}>
        <IconButton type={IconButtonKind.Dark} name="menu" disabled/>
        <IconButton type={IconButtonKind.Light} name="close" disabled/>
      </div>

    </div>
  )
}

export default Buttons;