import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import Button, { ButtonKind } from '../../../common/components/Button';
import { toast } from 'react-toastify';
import Notification, { NotificationType } from '../../../common/components/Notification'



const onClick = (message: string) => {

}

type Props = {

}

const Notifications: FunctionComponent<Props> = () => {

  const message = 'This is how you trigger a notification. Use `toast()` and then pass in the <Notification/> component';

  return (
    <div>
      <h2>Notifications</h2>
      <div className={styles.content}>

        <Button kind={ButtonKind.Primary} text="Default" onClick={() => toast(
          <Notification type={NotificationType.Default} 
            message={message} 
          />)} />

        <Button kind={ButtonKind.Primary} text="Success" onClick={() => toast(
          <Notification type={NotificationType.Success} 
            message={message} 
          />)} />


        <Button kind={ButtonKind.Primary} text="Error" onClick={() => toast(
          <Notification type={NotificationType.Error} 
            message={message} 
          />)} />


        <Button kind={ButtonKind.Primary} text="Warning" onClick={() => toast(
          <Notification type={NotificationType.Warning} 
            message={message} 
          />)} />


        <Button kind={ButtonKind.Primary} text="Info" onClick={() => toast(
          <Notification type={NotificationType.Info} 
            message={message} 
          />)} />




        {/* <div className={styles.notif}>
          <Notification type={NotificationType.Default} message="Default" />
        </div>
        <div className={styles.notif}>
          <Notification type={NotificationType.Success} message="Success" />
        </div>
        <div className={styles.notif}>
          <Notification type={NotificationType.Error} message="Error" />
        </div>
        <div className={styles.notif}>
          <Notification type={NotificationType.Warning} message="Warning" />
        </div>
        <div className={styles.notif}>
          <Notification type={NotificationType.Info} message="Default" />
        </div> */}
      </div>
    </div>
  )
}

export default Notifications;