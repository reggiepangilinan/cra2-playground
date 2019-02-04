import React, { FunctionComponent } from 'react'
import { Formik, FormikProps, Form, Field, FieldProps } from 'formik';
type Props =  {

}


export type SampleFormModel = {
    name: string,
    email: string
};


const SampleForm: FunctionComponent<Props> = () => { 
    return (
        <div>
            <h3>Sample form</h3>
            <Formik
        initialValues={{ name: '' , email: ''}}
        onSubmit={(values: SampleFormModel) => alert(JSON.stringify(values))}
        render={(formikBag: FormikProps<SampleFormModel>) => (
          <Form>
            <Field
              name="name"
              render={({ field, form }: FieldProps<SampleFormModel>) => (
                <div>
                  <input type="text" {...field} placeholder="Name" />
                  {form.touched.name &&
                    form.errors.name &&
                    form.errors.name}
                </div>
              )}
            />
            <Field
              name="email"
              render={({ field, form }: FieldProps<SampleFormModel>) => (
                <div>
                  <input type="text" {...field} placeholder="Email" />
                  {form.touched.email &&
                    form.errors.email &&
                    form.errors.email}
                </div>
              )}
            />
                   <button type="submit">Submit</button>
          </Form>
        )}
      />
        </div>
    )
}

export default SampleForm;