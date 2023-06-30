const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  if (process.env.NODE_ENV === "development") {
    // In development mode, send the error stack trace
    res.status(err.statusCode).json({
      success: false,
      error: err.message,
      stack: err.stack,
    });
  } else {
    // In production mode, send a simplified error message
    res.status(err.statusCode).json({
      success: false,
      error: err.message,
    });
  }
};
