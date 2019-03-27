import React, { FunctionComponent, CSSProperties } from "react";
import styles from './styles.module.scss';
import { WithChildren } from "../../types";

type CardHeaderProps = {
  
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