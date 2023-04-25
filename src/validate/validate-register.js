import Joi from 'joi';

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'string.empty': 'firstName is required',
  }),
  lastName: Joi.string().trim().required().messages({
    'string.empty': 'lastName is required',
  }),
  userName: Joi.string()
    .regex(/^[a-zA-Z0-9_]{3,30}$/)
    .messages({
      'string.pattern.base': 'must be a valid Username',
    }),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .messages({
      'string.empty': 'mobile is required',
    }),
  idcardNumber: Joi.string()
    .pattern(/^[0-9]{13}$/)
    .messages({
      'string.empty': 'ID Card Number is required',
    }),
  password: Joi.string().alphanum().min(6).required().trim().messages({
    'string.empty': ' password is required',
    'string.alphanum': ' password must contain number or alphabet',
    'string.min': 'password much have at least 6 characters',
  }),
  // confirmPassword: Joi.string()
  //   .valid(Joi.ref('password'))
  //   .required()
  //   .trim()
  //   .messages({
  //     'any.only': ' password and confirm password did not match',
  //     'string.empty': 'confirm password is required',
  //   }),
});

const validateRegister = input => {
  const { error } = registerSchema.validate(input, {
    abortEarly: false,
  });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegister;
