const { author } = require('@utils/author')

const responseSuccess = (message = 'success', args = null) => {
  const { data, ...rest } = args
  const response = {
    message,
    success: true,
    ...rest,
    author
  }

  if (data instanceof Array) {
    response.count = data.length
    response.data = data
  }
  if (data instanceof Object) response.data = data

  return response
}

module.exports = { responseSuccess }