import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import Button, { ButtonKind } from '../../../common/components/Button';
import { notifyDefault, notifySuccess, notifyError, notifyWarning, notifyInfo } from '../../../common/components/Notification'

type Props = {

}

const Notifications: FunctionComponent<Props> = () => {
  const message = 'This is how you trigger a notification. Use `toast()` and then pass in the <Notification/> component';
  return (
    <div>
      <h2>Notifications</h2>
      <div className={styles.content}>
        <Button kind={ButtonKind.Primary} text="Default" onClick={() => notifyDefault(message)} />
        <Button kind={ButtonKind.Primary} text="Success" onClick={() => notifySuccess(message)} />
        <Button kind={ButtonKind.Primary} text="Error" onClick={() => notifyError(message)} />
        <Button kind={ButtonKind.Primary} text="Warning" onClick={() => notifyWarning(message)} />
        <Button kind={ButtonKind.Primary} text="Info" onClick={() => notifyInfo(message)} />
      </div>
    </div>
  )
}

export default Notifications;