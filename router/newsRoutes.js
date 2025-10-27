const express = require('express')
const {
  addNewsPost,
  updateNewsPost,
  deleteNewsPost,
  getAllNewsPosts,
  getNewsBySlug
} = require('../controller/newsPostContoller');
const { authMiddleware } = require('./utils/authMiddleware');

const router = express.Router();

router.get('/news', getAllNewsPosts);
router.get('/news/:slug', getNewsBySlug);

router.use(authMiddleware);

router.post('/news', addNewsPost);
router.patch('/news/:id', updateNewsPost);
router.delete('/news/:id', deleteNewsPost);

module.exports = router;