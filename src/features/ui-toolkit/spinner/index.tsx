import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';


type Props = {

}

const Spinner: FunctionComponent<Props> = () => {
  return (
    <div>
      <h2>Spinner</h2>
      <div className={styles.content}>
      </div>
    </div>
  )
}

export default Spinner;