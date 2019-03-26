import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import Card from '../../../common/components/Card';

type Props = {

}

const CardSample: FunctionComponent<Props> = () => {
  return (
    <div>
      <h2>Card</h2>
      <div className={styles.content}>
        <Card>
          <h1>Test</h1>
        </Card>
      </div>
    </div>
  )
}

export default CardSample;