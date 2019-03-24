import React, { FunctionComponent, ReactNode } from "react";
import styles from './styles.module.scss';
import Icon from "../Icon";
import { toast } from "react-toastify";

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
            {getIcon(props.type, props.iconName)}
            <p>{props.message}</p>
        </div>
    );
}



export const notifyDefault = (message: string) => toast(
    <Notification type={NotificationType.Default}
        message={message}
    />, {
        className: 'toast-container',
        bodyClassName: 'toast-body'
    });

export const notifySuccess = (message: string) => toast(
    <Notification type={NotificationType.Success}
        message={message}
    />, {
        className: 'toast-container',
        bodyClassName: 'toast-body'
    });

export const notifyError = (message: string) => toast(
    <Notification type={NotificationType.Error}
        message={message}
    />, {
        className: 'toast-container',
        bodyClassName: 'toast-body'
    });


export const notifyWarning = (message: string) => toast(
    <Notification type={NotificationType.Warning}
        message={message}
    />, {
        className: 'toast-container',
        bodyClassName: 'toast-body'
    });


export const notifyInfo = (message: string) => toast(
    <Notification type={NotificationType.Info}
        message={message}
    />, {
        className: 'toast-container',
        bodyClassName: 'toast-body'
    });

export default Notification;