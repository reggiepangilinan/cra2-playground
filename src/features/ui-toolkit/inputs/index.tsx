import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import Button from '../../../common/components/Button';
import { ButtonKind, IconButtonKind } from '../../../common/types';
import IconButton from '../../../common/components/IconButton';
import FormField from '../../../common/components/FormField';

type Props = {

}

const Inputs: FunctionComponent<Props> = () => {
  return (
    <div>
      <h3>Text Input</h3>
      <div className={styles.content}>
        {/* <FormField name="test" type="text" label="some label" placeholder="something 1" /> */}
      </div>
    </div>
  )
}

export default Inputs;