import React, { FunctionComponent, ReactNode } from "react";
import styles from './styles.module.scss';
import defaultavatar from './defaultavatar.png';

type Props = {
    src?: string,
    size?: number
}

const Avatar: FunctionComponent<Props> = (props: Props) => {

    const src = props.src ? props.src : defaultavatar;
    const style = props.size ? {
        height: `${props.size}px`,
        width: `${props.size}px`,
        borderRadius: `${props.size}px`,
    } : {};
    return (
        <img className={styles.avatar} style={style} src={src} />
    );
}
export default Avatar;