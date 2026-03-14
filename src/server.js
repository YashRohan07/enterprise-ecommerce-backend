// Starts the Express server using the configured port and logs the startup message.
const app = require("./app");
const config = require("./config");
const logger = require("./config/logger");

const PORT = config.port;

// Start the HTTP server and log a success message when it is ready.
app.listen(PORT, () => {
  logger.info(`${config.appName} running on port ${PORT}`);
});
