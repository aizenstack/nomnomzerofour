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

router.post('/news',authMiddleware, addNewsPost);
router.patch('/news/:id',authMiddleware, updateNewsPost);
router.delete('/news/:id',authMiddleware, deleteNewsPost);

module.exports = router;