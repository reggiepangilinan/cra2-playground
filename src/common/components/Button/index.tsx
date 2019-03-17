import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';


export enum ButtonKind {
    Primary = 'Primary',
    Secondary = 'Secondary',
    Danger = 'Danger',
    Dark = 'Dark',
    Light = 'Light',
    Link = 'Link',
}

type Props = {
    text: string,
    onClick?: () => void,
    kind: ButtonKind,
    href?: string,
    type?: string,
    disabled?: boolean
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
        <button 
            type={props.type ? props.type : "button"} 
            className={getButtonStyle(props.kind)} 
            onClick={props.onClick} 
            disabled={props.disabled}
            >
            {props.kind === ButtonKind.Link && !props.disabled ?
                <a href={props.href ? props.href : ''}>{props.text}</a>
                : props.text
            }
        </button>
    );
}
export default Button;