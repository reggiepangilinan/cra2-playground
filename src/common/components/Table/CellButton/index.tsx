import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import "material-design-icons/iconfont/material-icons.css";

export enum CellButtonKind {
    Dark = 'Dark',
    Light = 'Light',
}

type Props = {
    name: string,
    onClick?: () => void
    type: CellButtonKind,
    disabled?: boolean
};

const getButtonStyle = (buttonType: CellButtonKind): string => {
    switch (buttonType) {

        case CellButtonKind.Dark:
            return styles.buttonDark;

        case CellButtonKind.Light:
            return styles.buttonLight;

        default:
            return '';
    }
}

const CellButton: FunctionComponent<Props> = (props: Props) => {
    return (
        <button className={getButtonStyle(props.type)} onClick={props.onClick} disabled={props.disabled}>
            <i className="material-icons">{props.name}</i>
        </button>
    );
}
export default CellButton;



