const express = require('express');
const router = express.Router();
const { addDays, getAllDays, deleteDays, updateDays } = require('../controller/daysController');
const { authMiddleware } = require('./utils/authMiddleware');


router.get('/days', getAllDays);
router.post('/days',authMiddleware, addDays);
router.put('/days/:id',authMiddleware, updateDays);
router.delete('/days/:id',authMiddleware, deleteDays);

module.exports = router;
