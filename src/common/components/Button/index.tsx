import React, { FunctionComponent } from "react";
import styles from './styles.module.scss';
import { ButtonType } from "../../types";

type Props = {
    text: string,
    onClick?: () => void
    type: ButtonType
};

const getButtonStyle = (buttonType: ButtonType): string => {
    switch (buttonType) {
        case ButtonType.Dark:
            return styles.buttonDark;

        case ButtonType.Light:
            return styles.buttonLight;

        default:
            return '';
    }
}

const Button: FunctionComponent<Props> = (props: Props) => {
    return (
        <button className={getButtonStyle(props.type)} onClick={props.onClick}>
            {props.text}
        </button>
    );
}
export default Button;