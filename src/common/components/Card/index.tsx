import React, { FunctionComponent, ReactNode } from "react";
import styles from './styles.module.scss';
import { WithChildren } from "../../types";

type Props = {

} & WithChildren

const Card: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className={styles.cardContainer}>
            {props.children}
        </div>
    );
}
export default Card;