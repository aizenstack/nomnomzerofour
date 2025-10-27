const express = require("express");
const {
  addFeedback,
  getAllFeedback,
  deleteFeedback,
} = require("../controller/feedbackController");
const { authMiddleware } = require('./utils/authMiddleware');

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Protected routes
router.post("/feedback", addFeedback);
router.get("/feedback", getAllFeedback);
router.delete("/feedback/:id", deleteFeedback);

module.exports = router;
