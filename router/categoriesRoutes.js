const express = require('express');
const {addCategories} = require('../controller/categoriesController');

const router = express.Router();

router.post('/categories', addCategories)

module.exports = router;