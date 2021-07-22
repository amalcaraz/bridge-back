const { ApiError, internalError } = require('../utils/error')

function errorController(error, req, res, next) {
  if (error.status = 404) {
    console.warn('👀  Not found: ', req.path)
  } else {
    console.error('🅾️  Error: ', error)
  }

  error = error instanceof ApiError ? error : internalError

  res
    .status(error.status)
    .json({ error: error.message });
}

module.exports = errorController
