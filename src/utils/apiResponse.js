// Sends a standard success response shape so all controllers return a consistent API format.
const sendResponse = (res, { statusCode = 200, message = "Success", data = null, meta = {} }) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    meta,
  });
};

module.exports = sendResponse;
