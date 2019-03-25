import React, { FunctionComponent } from "react";
import styles from './styles.module.scss';
import spinningballs from './spinningballs.svg';
import simplespinner from './simplespinner.svg';
import triplespinner from './triplespinner.svg';


export enum LoaderType {
    simple = "simple",
    spinningballs  = "spinningballs",
    triplespinner = "tritriplespinnerpp"
}


type Props = {
    message?: string,
    size?: number,
    type: LoaderType
    fillcontainer?: boolean
}


const getSpinnerImage = (type: LoaderType) => {
    switch (type) {
        case LoaderType.spinningballs:
            return spinningballs;

        case LoaderType.triplespinner:
            return triplespinner;

        default:
            return simplespinner;
    }
}

const Loader = (props: Props) => {
    
    const imageStyle = props.size ? { height: `${props.size}px`, width: `${props.size}px` } : {};

    return (<div className={props.fillcontainer ? styles.containerFill : styles.container}>
        <img src={getSpinnerImage(props.type)} style={imageStyle} />
        <p>{props.message}</p>
    </div>);
}
export default Loader;