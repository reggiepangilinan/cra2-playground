import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import { Formik, Form } from 'formik';
import FormTextField from '../../../common/components/FormTextField';
import FormNumberField from '../../../common/components/FormNumberField';
import FormRadioGroup from '../../../common/components/FormRadioGroup';


type Props = {

}

const initialValues = {
  textField: '',
  textFieldDisabled: '',
  textFieldError: '',
  textFieldEmail: '',
  textFieldPassword: 'secret',

  numericField: 100.01,
  numericFieldDisabled: 999.99,
  numericFieldError: 13,

  radioGroup: '',
  radioGroupDisabled: '',
}

const renderFormTextField = () => {
  return () => (<Form className={styles.form}>
    <FormTextField disabled={false} name="textField" label="Text Field" placeholder="Type here..." type="text" touched={false} error={undefined} />
    <FormTextField disabled={true} name="textFieldDisabled" label="Text Field Disabled" placeholder="You cannot type here..." type="text" touched={false} error={undefined} />
    <FormTextField disabled={false} name="textFieldError" label="Text Field with Error" placeholder="Text field with error" type="text" touched={true} error={'Oh noes! :('} />
    <FormTextField disabled={false} name="textFieldEmail" label="Email Field" placeholder="Your email@sample.com" type="email" touched={false} error={undefined} />
    <FormTextField disabled={false} name="textFieldPassword" label="Password Field" placeholder="This is a secret" type="password" touched={false} error={undefined} />
  </Form>);
}

const renderFormNumericField = () => {
  return () => (<Form className={styles.form}>
    <FormNumberField disabled={false} name="numericField" label="Numeric Field" placeholder="Type here..." touched={false} error={undefined} />
    <FormNumberField disabled={true} name="numericFieldDisabled" label="Text Field Disabled" placeholder="You cannot type here..." touched={false} error={undefined} />
    <FormNumberField disabled={false} name="numericFieldError" label="Text Field with Error" placeholder="Text field with error" touched={true} error={'Minimum of 1k please :)'} />
  </Form>);
}


const renderFormRadioGroup = (values: typeof initialValues) => {
  return (<Form className={styles.form}>
    <FormRadioGroup
      disabled={false}
      name="radioGroup"
      label="Left or Right?"
      touched={false}
      error={""}
      currentValue={values.radioGroup}
      options={[
        { id: 'Left', label: 'Left', value: 'Left' },
        { id: 'Right', label: 'Right', value: 'Right' }
      ]}
    />
    <FormRadioGroup
      disabled={true}
      name="radioGroupDisabled"
      label="You can't click this, Coz its disabled."
      touched={false}
      error={""}
      currentValue={values.radioGroupDisabled}
      options={[
        { id: 'Yeah', label: 'Yeah', value: 'Yeah' },
        { id: 'Nah', label: 'Nah', value: 'Nah' }
      ]}
    />

    <FormRadioGroup
      disabled={true}
      name="radioGroupDisabled"
      label="You can't click this, Coz its disabled."
      touched={true}
      error={"This is an error message"}
      currentValue={values.radioGroupDisabled}
      options={[
        { id: 'Yeah', label: 'Yeah', value: 'Yeah' },
        { id: 'Nah', label: 'Nah', value: 'Nah' }
      ]}
    />

  </Form>);
}



const Inputs: FunctionComponent<Props> = () => {
  return (
    <div className={styles.content}>
      <h2>Form Field - Text, Email and Password</h2>
      <div className={styles.content}>
        <Formik
          initialValues={initialValues}
          onSubmit={() => { }}
          render={renderFormTextField()}
        />
      </div>
      <h2>Form Field - Numeric</h2>
      <div className={styles.content}>
        <Formik
          initialValues={initialValues}
          onSubmit={() => { }}
          render={renderFormNumericField()}
        />
      </div>
      <h2>Form Field - Radio Button Group</h2>
      <div className={styles.content}>
        <Formik
          initialValues={initialValues}
          onSubmit={() => { }}
          render={({ values }) => renderFormRadioGroup(values)}
        />
      </div>
    </div>
  )
}

export default Inputs;


