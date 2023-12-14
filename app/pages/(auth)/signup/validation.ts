import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email format'),
  username: yup.string().required()
  .min(4, "Too short!"),
  gender: yup.string().required(),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(/.*[a-z].*/, 'Lowercase is required')
    .matches(/.*[A-Z].*/, 'Uppercase is required')
    .matches(/.*\d.*/, 'Number is required')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Special Character is required'),
  phone: yup.array().of(
    yup.object().shape({
      numbers: yup
        .string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(8, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Phone number is required'),
      address: yup.string().required('Address is required'),
    })
  ),
});
