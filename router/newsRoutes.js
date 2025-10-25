const express = require('express')
const {addNewsPost, updateNewsPost, deleteNewsPost} = require('../controller/newsPostContoller')

const router = express.Router();

router.post('/news', addNewsPost);
router.patch('/news/:id', updateNewsPost);
router.delete('/news/:id', deleteNewsPost);

module.exports = router;