import { useState } from 'react';
import { SampleFormModel } from "../models";
export const useSampleFormState = (initialValue: SampleFormModel) => {
  const [isLoading, setLoading] = useState(true);
  const [formData, setFormData] = useState(initialValue);
  const getFormDataRequest = () => {
    // Simulate sync data request
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const setFormDataReqest = (newFormData: SampleFormModel) => {
    setLoading(true);
    setTimeout(() => {
      setFormData(newFormData);
      setLoading(false);
    }, 1000);
  };
  return {
    formData,
    isLoading,
    getFormDataRequest,
    setFormDataReqest
  };
};
