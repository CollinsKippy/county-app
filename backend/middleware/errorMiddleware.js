const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const stack = process.env.NODE_ENV === 'production' ? null : err.stack;
  const message = err.message;

  res.status(statusCode).json({
    message: message,
    stack: stack,
  });
};

module.exports = {
  errorHandler,
};
