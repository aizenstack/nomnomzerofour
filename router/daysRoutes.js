const express = require('express');
const router = express.Router();
const { addDays, getAllDays, deleteDays, updateDays } = require('../controller/daysController');
const { authMiddleware } = require('./utils/authMiddleware');

// Apply auth middleware to all routes
router.use(authMiddleware);

// Protected routes
router.get('/days', getAllDays);
router.post('/days', addDays);
router.put('/days/:id', updateDays);
router.delete('/days/:id', deleteDays);

module.exports = router;
