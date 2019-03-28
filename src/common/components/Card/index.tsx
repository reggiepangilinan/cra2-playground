import React, { FunctionComponent, CSSProperties } from "react";
import styles from './styles.module.scss';
import { WithChildren } from "../../types";
import { AvatarProps } from "../Avatar";




type CardFooterProps = {
    style?: CSSProperties;
} & WithChildren
export const CardFooter: FunctionComponent<CardProps> = (props: CardFooterProps) => {
    return (
        <div className={styles.cardFooter} style={props.style}>
            {props.children}
        </div>
    );
}



type CardContentProps = {
    style?: CSSProperties;
} & WithChildren
export const CardContent: FunctionComponent<CardProps> = (props: CardContentProps) => {
    return (
        <div className={styles.cardContent} style={props.style}>
            {props.children}
        </div>
    );
}


type CardHeaderProps = {
    primaryText: string,
    subText?: string,
    avatar?: React.ReactElement<AvatarProps>
};
export const CardHeader: FunctionComponent<CardHeaderProps> = (props: CardHeaderProps) => {
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



type CardProps = {
    style?: CSSProperties;
    scaleOnHover?: boolean
} & WithChildren

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
    return (
        <div className={props.scaleOnHover? styles.cardScaleOnHover : styles.cardDefault} style={props.style}>
            {props.children}
        </div>
    );
}
export default Card;