// Loads environment variables and creates one central config object for the project.
const dotenv = require("dotenv");
const path = require("path");

// Load values from the .env file in the project root.
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

// These environment variables must exist for the app to run safely.
const requiredEnvVars = ["NODE_ENV", "PORT"];

// Stop the app early if any required environment variable is missing.
requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

// Export one shared config object so the rest of the app does not use process.env directly.
const config = {
  nodeEnv: process.env.NODE_ENV,
  port: Number(process.env.PORT),
  appName: process.env.APP_NAME || "enterprise-ecommerce-backend",
  logLevel: process.env.LOG_LEVEL || "info",
};

module.exports = config;
