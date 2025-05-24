const ERROR_CODES = require('./errorCodes')
class BaseError extends Error {
  constructor (category, errorKey, customMessage) {
    const errorDef = ERROR_CODES[category][errorKey]
    if (!errorDef) { throw new Error(`Error definition not found for ${category}.${errorKey}`) }

    super(customMessage || errorDef.message)
    this.name = this.constructor.name
    this.code = errorDef.code
    this.description = errorDef.description
    this.status = errorDef.status
  }
}

class AuthorizationError extends BaseError {
  constructor (errorKey, customMessage) {
    super('AUTH', errorKey, customMessage)
  }
}
class ExpirationError extends BaseError {
  constructor (errorKey, customMessage) {
    super('EXPIRATION', errorKey, customMessage)
  }
}
class EmailError extends BaseError {
  constructor (errorKey, customMessage) {
    super('EMAIL', errorKey, customMessage)
  }
}
class DataError extends BaseError {
  constructor (errorKey, customMessage) {
    super('DATA', errorKey, customMessage)
  }
}
class ValidationError extends BaseError {
  constructor (errorKey, customMessage) {
    super('VALIDATION', errorKey, customMessage)
  }
}
class ServerError extends BaseError {
  constructor (errorKey, customMessage) {
    super('SERVER', errorKey, customMessage)
  }
}

module.exports = {
  AuthorizationError,
  ExpirationError,
  EmailError,
  DataError,
  ValidationError,
  ServerError
}