import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';


type Props = {

}

const Notifications: FunctionComponent<Props> = () => {
  return (
    <div>
      <h2>Notifications</h2>
      <div className={styles.content}>
      </div>
    </div>
  )
}

export default Notifications;