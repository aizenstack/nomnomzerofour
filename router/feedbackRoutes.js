const express = require("express");
const {
  addFeedback,
  getAllFeedback,
  deleteFeedback,
} = require("../controller/feedbackController");

const router = express.Router();

router.post("/feedback", addFeedback);
router.get("/feedback", getAllFeedback);
router.delete("/feedback/:id", deleteFeedback);

module.exports = router;
