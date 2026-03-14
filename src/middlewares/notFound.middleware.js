// Handles requests for routes that do not exist and forwards a 404 error to the global error handler.
const ApiError = require("../utils/ApiError");

// Create a standard 404 error when no route matches the request.
const notFound = (req, res, next) => {
  next(new ApiError(404, `Route not found: ${req.originalUrl}`));
};

module.exports = notFound;
