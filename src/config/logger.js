// Creates the shared logger used across the project for consistent application logs.
const { createLogger, format, transports } = require("winston");
const config = require("./env");

// Create a logger using the log level from environment configuration.
const logger = createLogger({
  level: config.logLevel,
  format: format.combine(
    // Add timestamp to every log entry.
    format.timestamp(),

    // Include stack trace when logging errors.
    format.errors({ stack: true }),

    // Create a clean log message format for console output.
    format.printf(({ timestamp, level, message, stack }) => {
      return stack
        ? `[${timestamp}] ${level.toUpperCase()}: ${message}\n${stack}`
        : `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),

  // Log to the console for now. More transports can be added later if needed.
  transports: [new transports.Console()],
});

module.exports = logger;
