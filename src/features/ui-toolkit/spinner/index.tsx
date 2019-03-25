import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import Loader, { LoaderType } from '../../../common/components/Loader';


type Props = {

}

const Spinner: FunctionComponent<Props> = () => {
  return (
    <div>
      <h2>Spinner</h2>
      <div className={styles.content}>
        <Loader type={LoaderType.simple} message="Simple Spinner" />
      </div>

      <div className={styles.content}>
        <Loader message="Spinning Balls" type={LoaderType.spinningballs} />
      </div>

      <div className={styles.content}>
        <Loader message="Triple Spinner" type={LoaderType.triplespinner}  />
      </div>



    </div>
  )
}

export default Spinner;