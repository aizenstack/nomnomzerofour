const express = require('express');
const router = express.Router();
const { addDays, getAllDays, deleteDays, updateDays } = require('../controller/daysController');
const { authMiddleware } = require('./utils/authMiddleware');

router.use(authMiddleware);

router.get('/days', getAllDays);
router.post('/days', addDays);
router.put('/days/:id', updateDays);
router.delete('/days/:id', deleteDays);

module.exports = router;
