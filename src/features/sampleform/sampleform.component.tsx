import React, { FunctionComponent } from 'react'
import { Formik, FormikProps, Form, Field, FieldProps } from 'formik';
import styles from './sampleform.module.scss';
import {string, object, bool } from 'yup'

type Props = {

}

export type SampleFormModel = {
  name: string,
  email: string,
  isAgreed: boolean
};

const handleSubmit = (values: SampleFormModel) => {
  alert(JSON.stringify(values));
};

const validatonSchema = object().shape({
  name: string().min(9, 'Name must be 9 characters or longer').required('Name is required'),
  email: string().email('Email not valid').required('Email is required'),
  isAgreed: bool().oneOf([true], "You must agree")
});

const SampleForm: FunctionComponent<Props> = () => {
  return (
    <div>
      <h3>Sample form</h3>
      <Formik
        initialValues={{ name: '', email: '', isAgreed: false }}
        onSubmit={handleSubmit}
        validationSchema={validatonSchema}
        render={({ touched, errors, values, submitForm }: FormikProps<SampleFormModel>) => (

          <Form className={styles.sampleForm}>
            <div className={styles.fieldGroupInput}>
              <label>Name</label>
              <Field name="name" placeholder="Name" type="text" />
              { touched.name 
                && errors.name 
                && <small style={{color: 'red'}}>{errors.name}</small> }
              
            </div>

            <div className={styles.fieldGroupInput}>
              <label>Email</label>
              <Field name="email" placeholder="Email" type="email" />
              { touched.email && errors.email && <small style={{color: 'red'}}>{errors.email}</small> }
            </div>
            
            <label style={{display: 'flex'}}>
              <Field name="isAgreed" type="checkbox" checked={values.isAgreed} style={{marginRight: '10px'}} label="I agree"/>
              I agree
            </label>
            { touched.isAgreed && errors.isAgreed && <small style={{color: 'red'}}>{errors.isAgreed}</small> }
            <button type="submit" onClick={()=> submitForm()}>Submit</button>
          </Form>
        )}
      />
    </div>
  )
}

export default SampleForm;