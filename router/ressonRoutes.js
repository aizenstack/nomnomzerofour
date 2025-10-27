const express = require("express");
const router = express.Router();
const { createResson, getAllResson } = require("../controller/ressonController");
const { authMiddleware } = require('./utils/authMiddleware');

// Apply auth middleware to all routes
router.use(authMiddleware);

// Protected routes
router.post("/resson", createResson);
router.get("/resson", getAllResson);

module.exports = router;
