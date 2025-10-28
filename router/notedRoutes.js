const express = require('express');
const {authMiddleware} = require('../router/utils/authMiddleware')
const {getAllNoted, createNoted, updateNoted, deleteNoted} = require('../controller/notedController');

const router = express.Router();

router.use(authMiddleware)
router.get('/noteds', getAllNoted);
router.post('/noteds', createNoted);
router.patch('/noteds/:id', updateNoted);
router.delete('/noted/:id', deleteNoted);

module.exports = router;