import React, { FunctionComponent, useEffect } from 'react'
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik';
import styles from './sampleform.module.scss';
import Button, { ButtonKind } from '../../../common/components/Button';
import FormTextField from '../../../common/components/FormTextField';
import FormCheckBox from '../../../common/components/FormCheckBox';
import FormNumberField from '../../../common/components/FormNumberField';
import validatonSchema from './sampleform.validator';
import FormRadioGroup from '../../../common/components/FormRadioGroup';
import FormSelect from '../../../common/components/FormSelect';
import { useSampleFormState } from './hooks/useSampleFormState';
import { SampleFormModel } from './models';

type Props = {

}

const initialValues: SampleFormModel = {
  name: '',
  email: '',
  isAgreed: false,
  password: '',
  age: '',
  temperature: undefined,
  favoriteColor: undefined,
  favoriteDishes: []
};




const handleSubmit = (
  values: SampleFormModel,
  actions: FormikActions<SampleFormModel>,
  setFormDataReqest: (newFormData: SampleFormModel) => void
) => {
  actions.setSubmitting(false);
  actions.resetForm(values); //Reset form with the latest starting values
  setFormDataReqest(values);
};



const SampleForm: FunctionComponent<Props> = () => {

  const {
    formData,
    isLoading,
    getFormDataRequest,
    setFormDataReqest
  } = useSampleFormState(initialValues);

  useEffect(() => {
    getFormDataRequest();
    [isLoading]
  })

  return (

    isLoading ?
      <div>Processing your request...</div>
      :
      <div>
        <h2>Sample form</h2>
        <Formik
          initialValues={formData}
          onSubmit={(values: SampleFormModel, actions: FormikActions<SampleFormModel>) => handleSubmit(values, actions, setFormDataReqest)}
          validationSchema={validatonSchema}
          render={({ touched, errors, resetForm, values, dirty, isSubmitting }: FormikProps<SampleFormModel>) => (

            <Form className={styles.sampleForm}>
              <FormTextField
                disabled={isSubmitting}
                name="name"
                label="Name"
                placeholder="Enter your name"
                type="text"
                touched={touched.name}
                error={errors.name}
              />
              <FormTextField
                disabled={isSubmitting}
                name="email"
                label="Email"
                placeholder="Email"
                type="email"
                touched={touched.email}
                error={errors.email}
              />
              <FormTextField
                disabled={isSubmitting}
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                touched={touched.password}
                error={errors.password}
              />
              <FormNumberField
                disabled={isSubmitting}
                name="age"
                label="Age"
                placeholder="Age"
                touched={touched.age}
                error={errors.age}
              />

              <FormRadioGroup
                disabled={isSubmitting}
                name="temperature"
                label="How are you feeling?"
                touched={touched.temperature}
                error={errors.temperature}
                currentValue={values.temperature}
                options={[
                  { id: 'hot', label: 'Hot', value: 'hot' },
                  { id: 'cold', label: 'Cold', value: 'cold' }
                ]}
              />

              <FormSelect
                disabled={isSubmitting}
                name='favoriteColor'
                placeholder='List of colors'
                label='Your most favorite color of all time'
                touched={touched.favoriteColor}
                error={errors.favoriteColor}
                currentValue={values.favoriteColor}
                multi={false}
                searchable={false}
                options={[
                  { label: 'Red', value: 'red' },
                  { label: 'Blue', value: 'blue' },
                  { label: 'Yellow', value: 'yellow' },
                  { label: 'Green', value: 'green' }
                ]}
              />

              <FormSelect
                disabled={isSubmitting}
                name='favoriteDishes'
                placeholder='Select at least 3 favorite dishes'
                label='Your favorite dishes'
                touched={touched.favoriteDishes}
                error={errors.favoriteDishes}
                currentValue={values.favoriteDishes}
                multi={true}
                searchable={true}
                options={[
                  { label: 'Filipino', value: 'filippino' },
                  { label: 'Japanese', value: 'jap' },
                  { label: 'Korean', value: 'korean' },
                  { label: 'Chinese', value: 'Chinese' }
                ]}
              />

              <FormCheckBox
                disabled={isSubmitting}
                name="isAgreed"
                label="Do you agree? Make sure you agree."
                touched={touched.isAgreed}
                error={errors.isAgreed}
                checked={values.isAgreed}
              />

              <div className={styles.formButtonWrapper}>
                <Button type="submit" disabled={!dirty || isSubmitting} kind={ButtonKind.Primary} text="Submit" />
                <Button disabled={!dirty || isSubmitting} onClick={() => resetForm(formData)} kind={ButtonKind.Danger} text="Reset Form" />
              </div>

            </Form>
          )}
        />
      </div>
  )
}

export default SampleForm;