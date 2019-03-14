import React, { FunctionComponent } from 'react'
import { Formik, FormikProps, Form, Field, FieldProps } from 'formik';
import styles from './sampleform.module.scss';
import { string, object, bool } from 'yup'
import Button from '../../../common/components/Button';
import { ButtonKind } from '../../../common/types';
import FormField from '../../../common/components/FormField';

type Props = {

}

export type SampleFormModel = {
  name: string,
  email: string,
  isAgreed: boolean,
  password: string
};

const handleSubmit = (values: SampleFormModel) => {
  alert(JSON.stringify(values));
};

const validatonSchema = object().shape({
  name: string().min(9, 'Name must be 9 characters or longer').required('Name is required'),
  email: string().email('Email not valid').required('Email is required'),
  password: string().min(9, 'Password must be 9 characters or longer').required('Password is required'),
  isAgreed: bool().oneOf([true], "You must agree")
});

const SampleForm: FunctionComponent<Props> = () => {
  return (
    <div>
      <h3>Sample form</h3>
      <Formik
        initialValues={{ name: '', email: '', isAgreed: false, password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validatonSchema}
        render={({ touched, errors, values, submitForm }: FormikProps<SampleFormModel>) => (

          <Form className={styles.sampleForm}>

            <FormField name="name"
              label="Name"
              placeholder="Enter your name"
              type="text"
              touched={touched.name}
              error={errors.name}
            />

            <FormField name="email"
              label="Email"
              placeholder="Email"
              type="email"
              touched={touched.email}
              error={errors.email}
            />

            <FormField name="password"
              label="Password"
              placeholder="Password"
              type="password"
              touched={touched.password}
              error={errors.password}
            />


            <label style={{ display: 'flex' }}>
              <Field name="isAgreed" type="checkbox" checked={values.isAgreed} style={{ marginRight: '10px' }} label="I agree" />
              I agree
            </label>
            {touched.isAgreed && errors.isAgreed && <small style={{ color: 'red' }}>{errors.isAgreed}</small>}
            <Button type="submit" onClick={() => submitForm()} kind={ButtonKind.Primary} text="Submit" />
          </Form>
        )}
      />
    </div>
  )
}

export default SampleForm;