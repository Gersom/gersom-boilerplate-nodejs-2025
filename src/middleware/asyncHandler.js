/*
  This middleware is used to handle async errors.
  It is used to catch async errors and pass them to the next middleware.
  It is used to handle async errors in the controllers.
*/
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

export default asyncHandler