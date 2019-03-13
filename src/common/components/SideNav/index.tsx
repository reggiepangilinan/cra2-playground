import React, { FunctionComponent, ReactNode } from "react";
import styles from './styles.module.scss';
import useSideNavToggle from "../SideNavToggleProvider/useSideNavToggle";

type Props = {
    children: ReactNode
}

const SideNav: FunctionComponent<Props> = (props: Props) => {
    const { shown } = useSideNavToggle();
    return (
        <nav className={shown ? styles.navShown : styles.navHidden}>
            {props.children}
        </nav>
    );
}
export default SideNav;