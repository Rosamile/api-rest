const { stack } = require("../routes/products.router");

function logError(error, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandle(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
}

function errorBoom(error, req, res, next) {
  if (err.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);

  }
}

module.exports = {
  logError, errorHandle, errorBoom
}
