import { author } from '#utils/author.js'

// Arguments: err, req, res, next
const errorHandler = (err, _, res, _) => {
  const errorResponse = {
    success: false,
    status: err.status || 500,
    error: {
      code: err.code || 'SRV_001',
      message: err.message || 'Server error'
    },
    author
  }

  console.error('\nERROR:')
  console.log('* Name:', err.name)
  console.log('* Code:', err.code)
  console.error('* Message:', err.message)

  if (process.env.NODE_ENV === 'development') {
    errorResponse.error.name = err.name

    if (err.context) errorResponse.error.context = err.context

    const replaceStack = err.stack?.replace(`${err.name}: ${err.message}\n `, '')
    errorResponse.error.stack = replaceStack

    if (err.issues) console.log('* Issues:', err.issues)
    if (err.context) console.log('* Context:', err.context)
    if (err.stack) console.log('* Stack:\n', err.stack)
  }

  res.status(errorResponse.status).json(errorResponse)
}

export default errorHandler
