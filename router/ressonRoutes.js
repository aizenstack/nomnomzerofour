const express = require("express");
const router = express.Router();
const { createResson, getAllRessons } = require("../controller/ressonController");

router.post("/resson", createResson);
router.get("/resson", getAllRessons);

module.exports = router;
