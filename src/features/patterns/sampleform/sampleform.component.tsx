import React, { FunctionComponent } from 'react'
import { Formik, FormikProps, Form, Field } from 'formik';
import styles from './sampleform.module.scss';
import Button, { ButtonKind } from '../../../common/components/Button';
import FormTextField from '../../../common/components/FormTextField';
import FormCheckBox from '../../../common/components/FormCheckBox';
import FormNumberField, { NumberField } from '../../../common/components/FormNumberField';
import validatonSchema from './sampleform.validator';
import FormRadioGroup from '../../../common/components/FormRadioGroup';

type Props = {

}

export type SampleFormModel = {
  name: string,
  email: string,
  isAgreed: boolean,
  password: string,
  age: NumberField,
  temperature?: string
};

const handleSubmit = (values: SampleFormModel) => {
  alert(JSON.stringify(values));
};

const initialValues = {
  name: '',
  email: '',
  isAgreed: false,
  password: '',
  age: '',
  temperature: undefined
};


const SampleForm: FunctionComponent<Props> = () => {
  return (
    <div>
      <h2>Sample form</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validatonSchema}
        render={({ touched, errors, resetForm, values }: FormikProps<SampleFormModel>) => (

          <Form className={styles.sampleForm}>
            <FormTextField
              name="name"
              label="Name"
              placeholder="Enter your name"
              type="text"
              touched={touched.name}
              error={errors.name}
            />
            <FormTextField name="email"
              label="Email"
              placeholder="Email"
              type="email"
              touched={touched.email}
              error={errors.email}
            />
            <FormTextField name="password"
              label="Password"
              placeholder="Password"
              type="password"
              touched={touched.password}
              error={errors.password}
            />
            <FormNumberField
              name="age"
              label="Age"
              placeholder="Age"
              touched={touched.age}
              error={errors.age}
            />

            <FormRadioGroup
              name="temperature"
              label="How are you feeling?"
              touched={touched.temperature}
              error={errors.temperature}
              currentValue={values.temperature}
              options={[
                  { id: 'hot', label: 'Hot', value: 'hot'},
                  { id: 'cold', label: 'Cold', value: 'cold'}
              ]}
            />

            <FormCheckBox name="isAgreed"
              label="Do you agree? Make sure you agree."
              touched={touched.isAgreed}
              error={errors.isAgreed}
              checked={values.isAgreed}
            />

            <div className={styles.formButtonWrapper}>
              <Button type="submit" kind={ButtonKind.Primary} text="Submit" />
              <Button onClick={() => resetForm(initialValues)} kind={ButtonKind.Danger} text="Reset Form" />
            </div>

          </Form>
        )}
      />
    </div>
  )
}

export default SampleForm;