import type { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
import { author, Author } from '#root/src/utils/author.js'

interface CustomError extends Error {
  status?: number
  code?: string
  context?: any
  issues?: any[]
}

interface ErrorResponse {
  success: boolean
  status: number
  error: {
    code: string
    message: string
    name?: string
    context?: any
    stack?: string
  }
  author: Author
}

const errorHandler: ErrorRequestHandler = (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const errorResponse: ErrorResponse = {
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