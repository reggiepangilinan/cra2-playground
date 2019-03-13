import React, { FunctionComponent } from "react";
type Props = {
    name: string
};
const Icon: FunctionComponent<Props> = (props: Props) => {
    return (<i className="material-icons">{props.name}</i>);
}
export default Icon;

