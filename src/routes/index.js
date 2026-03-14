// Combines all route groups and mounts them under API version paths.
const express = require("express");
const healthRoutes = require("./v1/health.routes");

const router = express.Router();

// Mount version 1 routes under /v1.
router.use("/v1", healthRoutes);

module.exports = router;
