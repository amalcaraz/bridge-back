class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
  }
}

module.exports = {
  ApiError,
  badRequestError: new ApiError('Bad Request', 400),
  notFoundError: new ApiError('Not Found', 404),
  internalError: new ApiError('Internal Error', 500)
}
