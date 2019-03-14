import { ReactNode } from "react";

export enum IconButtonType {
    Dark = 'Dark',
    Light = 'Light',
}

export enum ButtonType {
    Primary = 'Primary',
    Secondary = 'Secondary',
    Danger = 'Danger',
    Dark = 'Dark',
    Light = 'Light',
    Link = 'Link',
}

export type WithChildren = {
    children: ReactNode
}
