import React, { FunctionComponent, ReactNode } from "react";
import styles from './styles.module.scss';

type Props = {
    children: ReactNode
}

const Header: FunctionComponent<Props> = (props : Props) => {
    return (
        <header className={styles.header}>
            {props.children}
        </header>
    );
}
export default Header;