import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import "material-design-icons/iconfont/material-icons.css";

export enum IconButtonKind {
    Dark = 'Dark',
    Light = 'Light',
}

type Props = {
    name: string,
    onClick?: () => void
    type: IconButtonKind
};

const getButtonStyle = (buttonType: IconButtonKind): string => {
    switch (buttonType) {

        case IconButtonKind.Dark:
            return styles.iconButtonDark;

        case IconButtonKind.Light:
            return styles.iconButtonLight;

        default:
            return '';
    }
}

const IconButton: FunctionComponent<Props> = (props: Props) => {
    return (
        <button className={getButtonStyle(props.type)} onClick={props.onClick}>
            <i className="material-icons">{props.name}</i>
        </button>
    );
}
export default IconButton;



