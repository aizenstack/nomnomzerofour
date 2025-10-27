const express = require("express");
const {
  addFeedback,
  getAllFeedback,
  deleteFeedback,
} = require("../controller/feedbackController");
const { authMiddleware } = require('./utils/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post("/feedback", addFeedback);
router.get("/feedback", getAllFeedback);
router.delete("/feedback/:id", deleteFeedback);

module.exports = router;
