import { useState } from 'react';
import { SampleFormModel } from "../models";


export const useSavedFormState = (initialValue: SampleFormModel | undefined) => {
  const [savedData, setValue] = useState(initialValue);

  const setSavedFormData = (value: SampleFormModel) => {
    setValue(value);
  };
  
  return {
    savedData,
    setSavedFormData,
  };
};
