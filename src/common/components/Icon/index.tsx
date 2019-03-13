import React, { FunctionComponent } from "react";
import "material-design-icons/iconfont/material-icons.css";
type Props = {
    name: string
};
const Icon: FunctionComponent<Props> = (props: Props) => {
    return (<i className="material-icons">{props.name}</i>);
}
export default Icon;

