import { author } from '#utils/author.js'

export const generateResponse = (message = 'success', data = null, args = null) => {
  let response = {
    ...args,
    success: true,
    message,
    author
  }

  if (data instanceof Array) {
    response.count = data.length
    response.data = data
  }
  if (data instanceof Object) response.data = data

  return response
}

export const responseSuccess = (res, status, message, data, args) => {
  const response = generateResponse(message, data, args)
  res.status(status).json(response)
}