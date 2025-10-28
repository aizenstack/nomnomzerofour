const express = require("express");
const {
  addFeedback,
  getAllFeedback,
  deleteFeedback,
} = require("../controller/feedbackController");
const { authMiddleware } = require('./utils/authMiddleware');

const router = express.Router();


router.post("/feedback",authMiddleware, addFeedback);
router.get("/feedback", getAllFeedback);
router.delete("/feedback/:id",authMiddleware, deleteFeedback);

module.exports = router;
