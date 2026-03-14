// Provides the health status data returned by the health check endpoint.
const getHealthStatus = () => {
  return {
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  };
};

module.exports = {
  getHealthStatus,
};
