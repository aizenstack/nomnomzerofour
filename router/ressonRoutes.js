const express = require("express");
const router = express.Router();
const { createResson, getAllResson } = require("../controller/ressonController");
const { authMiddleware } = require('./utils/authMiddleware');


router.post("/resson",authMiddleware, createResson);
router.get("/resson", getAllResson);

module.exports = router;
