const express = require('express');
const {authMiddleware} = require('../router/utils/authMiddleware')
const {getAllNoted, createNoted, updateNoted, deleteNoted} = require('../controller/notedController');

const router = express.Router();

router.get('/noteds', getAllNoted);
router.post('/noteds',authMiddleware, createNoted);
router.patch('/noteds/:id',authMiddleware, updateNoted);
router.delete('/noteds/:id',authMiddleware, deleteNoted);

module.exports = router;