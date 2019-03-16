import { string, object, bool, number } from 'yup'
const validatonSchema = object().shape({
  name: string().min(9, 'Name must be 9 characters or longer').required('Name is required'),
  email: string().email('Email not valid').required('Email is required'),
  password: string().min(9, 'Password must be 9 characters or longer').required('Password is required'),
  age: number().nullable(false).required('Age is required').min(10, 'Minimum age is 10'),
  isAgreed: bool().oneOf([true], 'You must agree'),
  temperature: string().required('Please select an option')
});

export default validatonSchema;