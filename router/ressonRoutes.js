const express = require('express');
const {createResson} = require('../controller/ressonController');

const router = express.Router();

router.post('/resson', createResson);

module.exports = router;