const express = require('express');
const { getDashboardStats } = require('../controller/dashboardController');
const { authMiddleware } = require('./utils/authMiddleware');

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Protected route
router.get('/dashboard/stats', getDashboardStats);

module.exports = router;
