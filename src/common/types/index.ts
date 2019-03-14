import { ReactNode } from "react";

export enum IconButtonKind {
    Dark = 'Dark',
    Light = 'Light',
}

export enum ButtonKind {
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
