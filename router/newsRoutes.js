const express = require('express')
const {addNewsPost, updateNewsPost, deleteNewsPost, getAllNewsPosts, getNewsBySlug} = require('../controller/newsPostContoller')

const router = express.Router();

router.get('/news', getAllNewsPosts);
router.get('/news/:slug', getNewsBySlug);
router.post('/news', addNewsPost);
router.patch('/news/:id', updateNewsPost);
router.delete('/news/:id', deleteNewsPost);

module.exports = router;