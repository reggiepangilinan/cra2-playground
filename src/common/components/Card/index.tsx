import React, { FunctionComponent, CSSProperties } from "react";
import styles from './styles.module.scss';
import { WithChildren } from "../../types";

type Props = {
    style?: CSSProperties;
} & WithChildren

const Card: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className={styles.cardContainer} style={props.style}>
            {props.children}
        </div>
    );
}
export default Card;