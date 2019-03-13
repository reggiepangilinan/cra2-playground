import React, { FunctionComponent } from "react";
import styles from './styles.module.scss';
import ballloader from './ball-loader.svg';


type Props = {
    message: string
}


const Loader = (props: Props) => {
    return (<div className={styles.container}>
        <img src={ballloader} />
        <p>{props.message}</p>
    </div>);
}
export default Loader;