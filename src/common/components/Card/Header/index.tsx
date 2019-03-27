import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import Avatar, { AvatarProps } from "../../Avatar";

type Props = {
    primaryText: string,
    subText?: string,
    avatar?: React.ReactElement<AvatarProps>
};

const CardHeader: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className={styles.cardHeader}>
            {
                props.avatar &&
                <div className={styles.avatarWrapper}>
                    {props.avatar}
                </div>
            }
            <div className={styles.textWrapper}>
                <div className={styles.primaryText}>{props.primaryText}</div>
                {props.subText && <small className={styles.subText}>{props.subText}</small>}
                
            </div>
        </div>
    );
}
export default CardHeader;



