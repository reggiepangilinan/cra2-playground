import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { Formik, FormikProps, Form, FormikActions } from 'formik';
import useAsync from 'react-use/lib/useAsync';
import { toast } from 'react-toastify';
import styles from './sampleform.module.scss';
import Button, { ButtonKind } from '../../../common/components/Button';
import FormTextField from '../../../common/components/FormTextField';
import FormCheckBox from '../../../common/components/FormCheckBox';
import FormNumberField from '../../../common/components/FormNumberField';
import FormRadioGroup from '../../../common/components/FormRadioGroup';
import FormSelect from '../../../common/components/FormSelect';
import { SampleFormModel } from './models';
import { promiseSimulator } from '../../../common/utils';
import validatonSchema from './sampleform.validator'

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

const handleSubmit = async (
  values: SampleFormModel,
  actions: FormikActions<SampleFormModel>,
  isMounted: React.MutableRefObject<boolean>,
  setSavedFormData: (newFormData: SampleFormModel) => void
) => {
  const newValue = await promiseSimulator(values, 5000);

  if (isMounted.current) {
    actions.setSubmitting(false);
    actions.resetForm(newValue); //Reset form with the latest starting values
    setSavedFormData(newValue);
    toast.success('Yey! Data saved :)');
  }

};

const SampleForm: FunctionComponent<Props> = () => {
  //Simulate fake api call and retrieve data
  const { value: loadedData, loading: isLoading } = useAsync(() => promiseSimulator(initialValues, 1000), [initialValues, 1000]);

  //Initialize state for the saved form data by default its undefined coz user hasn't saved yet.
  const [savedData, setSavedFormData] = useState<undefined | SampleFormModel>(undefined);

  // Handle setState when component is already unmounted
  // If using axios track api call using axios instead
  // https://stackoverflow.com/questions/49906437/how-to-cancel-a-fetch-on-componentwillunmount
  // https://medium.freecodecamp.org/how-to-work-with-react-the-right-way-to-avoid-some-common-pitfalls-fc9eb5e34d9e
  const isMounted = useRef(true);

  const currentFormData = savedData ? savedData : loadedData;

  useEffect(() => {
    return () => isMounted.current = false;
  }, [])

  if (isLoading) return <div>Processing your request...</div>;

  return (
    <div>
      <h2>Sample form</h2>
      <Formik
        initialValues={currentFormData ? currentFormData : initialValues}
        onSubmit={(values: SampleFormModel, actions: FormikActions<SampleFormModel>) => handleSubmit(values, actions, isMounted, setSavedFormData)}
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
              <Button disabled={!dirty || isSubmitting} onClick={() => resetForm(currentFormData)} kind={ButtonKind.Danger} text="Reset Form" />
            </div>
          </Form>
        )}
      />
    </div>
  )

}

export default SampleForm;