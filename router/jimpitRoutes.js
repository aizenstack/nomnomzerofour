const express = require('express');
const {createdJimpitTeams, updateJimpitTeams, deleteJimpitTeams} = require('../controller/jimpitControlller')

const router = express.Router();

router.post('/jimpit', createdJimpitTeams);
router.patch('/jimpit/:id', updateJimpitTeams);
router.delete('/jimpit/:id', deleteJimpitTeams);

module.exports = router;