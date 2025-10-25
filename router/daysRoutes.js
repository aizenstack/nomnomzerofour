const express = require('express');
const {addDays} = require('../controller/daysController')

const router = express.Router();

router.post('/day', addDays)

module.exports = router;