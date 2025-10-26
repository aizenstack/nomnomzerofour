const express = require('express');
const { getDashboardStats } = require('../controller/dashboardController');
const router = express.Router();

router.get('/dashboard/stats', getDashboardStats);

module.exports = router;
