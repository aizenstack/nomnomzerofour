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



router.get("/jimpit", getAllJimpitTeams);
router.get("/jimpit/:id", getJimpitTeamById);
router.post("/jimpit", authMiddleware, createdJimpitTeams);
router.patch("/jimpit/:id", authMiddleware, updateJimpitTeams);
router.delete("/jimpit/:id", authMiddleware, deleteJimpitTeams);

module.exports = router;
