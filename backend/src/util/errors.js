const errorHandler = (err, req, res, next) => {
  console.error('Error handler:', err.stack)
  const status = err.statusCode || 500
  const message = err.message || 'Something went wrong'
  res.status(status).json({error: message})
}

const createError = (status, message) => {
  const err = new Error(message)
  err.statusCode = status
  return err
}

module.exports = {
  errorHandler,
  createError
}