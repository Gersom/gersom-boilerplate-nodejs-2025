const customErrors = require('@utils/apiErrors')
const { author } = require('@utils/author')

const errorHandler = (err, req, res, next) => {
  const isCustomError = Object.values(customErrors).some(
    (ErrorType) => err instanceof ErrorType
  )

  const errorResponse = {
    success: false,
    status: isCustomError ? err.status : 500,
    error: {
      code: isCustomError ? err.code : 'SRV_001',
      description: isCustomError ? err.description : 'Server error'
    },
    author
  }

  console.error('\nERROR:')
  console.log('* Name:', err.name)
  console.log('* Description:', err.description)
  console.log('* Code:', err.code)

  if (process.env.NODE_ENV === 'development') {
    const replaceStack = err.stack?.replace(`DataError: ${err.message}\n `, '')
    errorResponse.error.message = err.message
    errorResponse.error.stack = replaceStack

    console.error('* Message:', err.message)
    console.log('* Stack:\n', replaceStack)
  }

  res.status(errorResponse.status).json(errorResponse)
}

module.exports = errorHandler
