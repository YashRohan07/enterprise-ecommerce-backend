// Central error middleware that formats all application errors into one consistent API response.
const { ZodError } = require("zod");
const config = require("../config");
const logger = require("../config/logger");

// This middleware must have four parameters so Express treats it as an error handler.
const errorHandler = (err, req, res, _next) => {
  // Default values for unexpected errors.
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let errors = err.errors || [];

  // Convert Zod validation errors into a cleaner API-friendly format.
  if (err instanceof ZodError) {
    statusCode = 400;
    message = "Validation failed";
    errors = err.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
  }

  // Log useful error details for debugging and monitoring.
  logger.error(message, {
    stack: err.stack,
    statusCode,
    errors,
    method: req.method,
    path: req.originalUrl,
  });

  // Base error response returned to the client.
  const response = {
    success: false,
    message,
    errors,
  };

  // Show stack trace only in development for easier debugging.
  if (config.nodeEnv === "development" && err.stack) {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
};

module.exports = errorHandler;
