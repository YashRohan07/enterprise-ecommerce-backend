// Handles the health check HTTP request and returns a standard success response.
const asyncHandler = require("../utils/asyncHandler");
const sendResponse = require("../utils/apiResponse");
const { getHealthStatus } = require("../services/health.service");

// Controller keeps HTTP logic small: call service, then send response.
const getHealth = asyncHandler(async (req, res) => {
  const healthData = getHealthStatus();

  return sendResponse(res, {
    statusCode: 200,
    message: "Service is healthy",
    data: healthData,
  });
});

module.exports = {
  getHealth,
};
