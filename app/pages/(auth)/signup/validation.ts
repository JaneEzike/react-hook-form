import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
email: yup.string().email().required().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email format'),
  username: yup.string().required(),
  gender: yup.string().required(),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(RegExp('(.*[a-z].*)'), 'Lowercase is required')
    .matches(RegExp('(.*[A-Z].*)'), 'Uppercase is required')
    .matches(RegExp('(.*\\d.*)'), 'Number is required')
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), 'Special Character is required'),
    phone: yup.array().of(
    yup.object().shape({
      phone: yup.string().required(),
      address: yup.string().required()
    })
  ),
});