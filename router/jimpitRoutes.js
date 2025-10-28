const express = require("express");
const {
  createdJimpitTeams,
  updateJimpitTeams,
  deleteJimpitTeams,
  getAllJimpitTeams,
  getJimpitTeamById,
} = require("../controller/jimpitControlller");
const { authMiddleware } = require('./utils/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get("/jimpit", getAllJimpitTeams);
router.get("/jimpit/:id", getJimpitTeamById);
router.post("/jimpit", createdJimpitTeams);
router.patch("/jimpit/:id", updateJimpitTeams);
router.delete("/jimpit/:id", deleteJimpitTeams);

module.exports = router;
