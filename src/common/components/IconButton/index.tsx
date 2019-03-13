import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ButtonType } from "../../types";
import "material-design-icons/iconfont/material-icons.css";

type Props = {
    name: string,
    onClick?: () => void
    type: ButtonType
};

const getButtonStyle = (buttonType: ButtonType): string => {
    switch (buttonType) {

        case ButtonType.Dark:
            return styles.iconButtonDark;

        case ButtonType.Light:
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



