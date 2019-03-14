import React, { FunctionComponent, ReactNode } from "react";
import styles from './styles.module.scss';
import { WithChildren } from "../../types";

type Props = {

} & WithChildren

const Header: FunctionComponent<Props> = (props: Props) => {
    return (
        <header className={styles.header}>
            {props.children}
        </header>
    );
}
export default Header;