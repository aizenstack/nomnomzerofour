const express = require('express');
const { getDashboardStats } = require('../controller/dashboardController');
const { authMiddleware } = require('./utils/authMiddleware');

const router = express.Router();


router.get('/dashboard/stats', authMiddleware, getDashboardStats);

module.exports = router;
