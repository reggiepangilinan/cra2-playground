import React, { FunctionComponent } from 'react'
import { Formik, FormikProps, Form, Field, FieldProps } from 'formik';
import styles from './sampleform.module.scss';
import {string, object } from 'yup'

type Props = {

}

export type SampleFormModel = {
  name: string,
  email: string,
  sendMeUpdates: boolean
};

const handleSubmit = (values: SampleFormModel) => {
  alert(JSON.stringify(values));
};

const validatonSchema = object().shape({
  name: string().min(9, 'Name must be 9 characters or longer').required('Name is required'),
  email: string().email('Email not valid').required('Email is required'),
});

const SampleForm: FunctionComponent<Props> = () => {
  return (
    <div>
      <h3>Sample form</h3>
      <Formik
        initialValues={{ name: '', email: '', sendMeUpdates: false }}
        onSubmit={handleSubmit}
        validationSchema={validatonSchema}
        render={({ touched, errors, values, submitForm }: FormikProps<SampleFormModel>) => (

          <Form className={styles.sampleForm}>
            <div className={styles.fieldGroupInput}>
              <label>Name</label>
              <Field name="name" placeholder="Name" type="text" />
              { touched.name && errors.name && <small>{errors.name}</small> }
              
            </div>

            <div className={styles.fieldGroupInput}>
              <label>Email</label>
              <Field name="email" placeholder="Email" type="email" />
              { touched.email && errors.email && <small>{errors.email}</small> }
            </div>

            <label>
              <Field name="sendMeUpdates" type="checkbox" checked={values.sendMeUpdates} />
              Send me updates
            </label>
            <button type="submit" onClick={()=> submitForm()}>Submit</button>
          </Form>
        )}
      />
    </div>
  )
}

export default SampleForm;