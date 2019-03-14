import React, { FunctionComponent } from "react";
import styles from './styles.module.scss';
import { ButtonKind as ButtonKind } from "../../types";

type Props = {
    text: string,
    onClick?: () => void,
    kind: ButtonKind,
    href?: string,
    type?: string
};

const getButtonStyle = (buttonType: ButtonKind): string => {
    switch (buttonType) {

        case ButtonKind.Primary:
            return styles.buttonPrimary;

        case ButtonKind.Secondary:
            return styles.buttonSecondary;

        case ButtonKind.Danger:
            return styles.buttonDanger;

        case ButtonKind.Dark:
            return styles.buttonDark;

        case ButtonKind.Light:
            return styles.buttonLight;

        case ButtonKind.Link:
            return styles.buttonLink;

        default:
            return '';
    }
}

const Button: FunctionComponent<Props> = (props: Props) => {

        
    
    return (
        <button type={props.type} className={getButtonStyle(props.kind)} onClick={props.onClick}>
            {props.kind === ButtonKind.Link ?
                <a href={props.href ? props.href : ''}>{props.text}</a>
                : props.text
            }
        </button>
    );
}
export default Button;