const express = require("express");
const router = express.Router();
const { createResson, getAllResson } = require("../controller/ressonController");
const { authMiddleware } = require('./utils/authMiddleware');

router.use(authMiddleware);

router.post("/resson", createResson);
router.get("/resson", getAllResson);

module.exports = router;
