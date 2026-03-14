// Defines version 1 routes for the health check endpoint.
const express = require("express");
const { getHealth } = require("../../controllers/health.controller");

const router = express.Router();

// Health check route used to verify that the service is running properly.
router.get("/health", getHealth);

module.exports = router;
