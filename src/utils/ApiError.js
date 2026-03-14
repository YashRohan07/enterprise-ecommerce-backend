// Defines a custom application error class with HTTP status and optional error details.
class ApiError extends Error {
  constructor(statusCode, message, errors = []) {
    super(message);

    // HTTP status code for the error response.
    this.statusCode = statusCode;

    // Optional detailed error list, useful for validation or grouped errors.
    this.errors = errors;

    // Keeps error response structure consistent.
    this.success = false;

    // Captures a cleaner stack trace for debugging.
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;
