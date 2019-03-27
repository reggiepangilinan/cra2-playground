import React, { FunctionComponent, ReactNode, ReactChildren } from "react";
import styles from './styles.module.scss';




type TableHeadProps = {
    children: React.ReactElement<TableHeaderProps>[] | React.ReactElement<TableHeaderProps>
}
export const TableHead: FunctionComponent<TableHeadProps> = (props: TableHeadProps) => {
    return (
        <thead>
            <tr>
                {props.children}
            </tr>
        </thead>
    )
}


type TableHeaderProps = {
    label: string,
    align?: "left" | "center" | "right" | "justify" | "char",

    maxWidth?: string,
}
export const TableHeader: FunctionComponent<TableHeaderProps> = (props: TableHeaderProps) => {
    const currentAlign = props.align ? props.align : "left";
    const style = props.maxWidth ? { maxWidth: props.maxWidth, width: props.maxWidth } : {};
    return (
        <th style={style} align={currentAlign}>{props.label}</th>
    )
}



type TableRowProps = {
    key: string,
    children: React.ReactElement<TableCellProps>[] | React.ReactElement<TableCellProps>
}
export const TableRow: FunctionComponent<TableRowProps> = (props: TableRowProps) => {
    return (<tr>
        {props.children}
    </tr>
    )
}



type TableCellProps = {
    children?: ReactNode,
    align?: "left" | "center" | "right" | "justify" | "char",
}
export const TableCell: FunctionComponent<TableCellProps> = (props: TableCellProps) => {
    const currentAlign = props.align ? props.align : "left";
    return (
        <td align={currentAlign}>{props.children}</td>
    )
}




type TableChildren = {
    header: React.ReactElement<TableHeadProps>,
    rows: React.ReactElement<TableRowProps>[] | React.ReactElement<TableRowProps>,
}
type TableProps = {
    height? : string;
    children: TableChildren
}
export const Table: FunctionComponent<TableProps> = (props: TableProps) => {
    const { header, rows } = props.children;
    const style = props.height ? {height : props.height} : {}
    
    return (
        <div className={styles.tableContainer} style={style}>
            <table className={styles.table}>
                {header}
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

