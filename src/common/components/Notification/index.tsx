import React, { FunctionComponent, ReactNode } from "react";
import styles from './styles.module.scss';
import Icon from "../Icon";

export enum NotificationType {
    Default = 'default',
    Success = 'success',
    Error = 'error',
    Warning = 'warning',
    Info = 'info'
}

type Props = {
    message: string,
    type: NotificationType,
    iconName?: string
}

const getIcon = (type: NotificationType, iconName?: string): ReactNode => {
    switch (type) {
        case NotificationType.Default:
            return <div className={styles.iconDefault}><Icon name={iconName ? iconName : 'message'} /></div>;

        case NotificationType.Success:
            return <div className={styles.iconSuccess}><Icon name={iconName ? iconName : 'check'} /></div>;

        case NotificationType.Error:
            return <div className={styles.iconError}><Icon name={iconName ? iconName : 'close'} /></div>;

        case NotificationType.Warning:
            return <div className={styles.iconWarning}><Icon name={iconName ? iconName : 'warning'} /></div>;

        case NotificationType.Info:
            return <div className={styles.iconInfo}><Icon name={iconName ? iconName : 'message'} /></div>;
    }
}
const Notification: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className={styles.notificationWrapper}>
            <div className={styles.messageWrapper}>
                {getIcon(props.type, props.iconName)}
            </div>
            <div className={styles.messageWrapper}>
                <p>{props.message}</p>
            </div>
        </div>
    );
}
export default Notification;