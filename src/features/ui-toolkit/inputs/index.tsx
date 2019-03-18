import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import { Formik, Form } from 'formik';
import FormTextField from '../../../common/components/FormTextField';
import FormNumberField from '../../../common/components/FormNumberField';
import FormRadioGroup from '../../../common/components/FormRadioGroup';
import FormCheckBox from '../../../common/components/FormCheckBox';
import FormSelect from '../../../common/components/FormSelect';


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

  checkBox: true,
  checkBoxDisabled: true,
  checkBoxError: false,

  selectSingle: undefined,
  selectMulti: [],
  selectDisabled: undefined,
  selectError: undefined
}

const selection = [
  { label: 'Value 1', value: 1 },
  { label: 'Value 2', value: 2 },
  { label: 'Value 3', value: 3 },
  { label: 'Value 4', value: 4 }
]

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

const renderFormCheckBox = (values: typeof initialValues) => {
  return (<Form className={styles.form}>
    <FormCheckBox
      name="checkBox"
      label="Do you agree? Make sure you agree."
      touched={false}
      checked={values.checkBox}
    />

    <FormCheckBox
      disabled
      name="checkBoxDisabled"
      label="Can't touch this..."
      touched={false}
      checked={values.checkBoxDisabled}
    />


    <FormCheckBox
      name="checkBoxError"
      label="Some checkbox label"
      error="This is an error message"
      touched
      checked={values.checkBoxError}
    />

  </Form>);
}

const renderFormSelect = (values: typeof initialValues) => {
  return (<Form className={styles.form}>
    <FormSelect
      name='selectSingle'
      placeholder='Please select a single value'
      label='Single select'
      currentValue={values.selectSingle}
      multi={false}
      searchable={true}
      options={selection}
    />

    <FormSelect
      name='selectMulti'
      placeholder='Please select multiple values'
      label='Multiple select'
      currentValue={values.selectMulti}
      multi
      searchable={true}
      options={selection}
    />

    <FormSelect
      disabled
      name='selectDisabled'
      placeholder='Disabled select'
      label='Disabled select'
      currentValue={values.selectDisabled}
      multi={false}
      searchable={false}
      options={selection}
    />


<FormSelect
      name='selectError'
      placeholder='This has error'
      label='Not displayed'
      error='This is a sample error'
      currentValue={values.selectError}
      multi={false}
      searchable={false}
      options={selection}
      touched
      
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

      <h2>Form Field - Checkbox</h2>
      <div className={styles.content}>
        <Formik
          initialValues={initialValues}
          onSubmit={() => { }}
          render={({ values }) => renderFormCheckBox(values)}
        />
      </div>


      <h2>Form Field - Select</h2>
      <div className={styles.content}>
        <Formik
          initialValues={initialValues}
          onSubmit={() => { }}
          render={({ values }) => renderFormSelect(values)}
        />
      </div>

    </div>
  )
}

export default Inputs;


