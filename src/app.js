// Creates and configures the Express application with middleware, routes, and global error handling.
const express = require("express");
const routes = require("./routes");
const notFound = require("./middlewares/notFound.middleware");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

// Built-in middleware to parse JSON and form data from incoming requests.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount all API routes under /api.
app.use("/api", routes);

// Handle requests that do not match any route.
app.use(notFound);

// Handle all forwarded application errors in one place.
app.use(errorHandler);

module.exports = app;
