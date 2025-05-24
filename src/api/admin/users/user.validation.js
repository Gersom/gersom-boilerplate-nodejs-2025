const { ValidationError } = require('@utils/apiErrors')

const validateRegister = (req, _, next) => {
  if (!req.body?.email) {
    throw new ValidationError(
      'INVALID_INPUT', 'Email is required'
    )
  }

  if (!req.body?.password) {
    throw new ValidationError(
      'INVALID_INPUT', 'Password is required'
    )
  }

  if (!req.body?.name) {
    throw new ValidationError(
      'INVALID_INPUT', 'Name is required'
    )
  }

  req.body = {
    email: req.body.email.toLowerCase(),
    password: req.body.password,
    name: req.body.name.toLowerCase()
  }

  next()
}

module.exports = { validateRegister }