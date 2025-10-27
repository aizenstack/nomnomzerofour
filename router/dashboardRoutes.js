const express = require('express');
const { getDashboardStats } = require('../controller/dashboardController');
const { authMiddleware } = require('./utils/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/dashboard/stats', getDashboardStats);

module.exports = router;
