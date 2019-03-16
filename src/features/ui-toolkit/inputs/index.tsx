import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';


type Props = {

}

const Inputs: FunctionComponent<Props> = () => {
  return (
    <div>
      <h2>Text Input</h2>
      <div className={styles.content}>
      </div>
    </div>
  )
}

export default Inputs;