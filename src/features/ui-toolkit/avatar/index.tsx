import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import Avatar from '../../../common/components/Avatar';

type Props = {

}

const AvatarSample: FunctionComponent<Props> = () => {
  return (
    <div>
      <h2>Avatar</h2>
      <div className={styles.content}>
        <Avatar />
      </div>
      <div className={styles.content}>
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxPQ0CfxwRH1FOrpBnoB3S2zmJRCcgiZfGqUNLoQOBdsG3eGo' />
      </div>
      <div className={styles.content}>
        <Avatar size={80} />
      </div>
      <div className={styles.content}>
        <Avatar size={150} />
      </div>
    </div>
  )
}

export default AvatarSample;