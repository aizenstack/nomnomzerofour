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

// Public routes (no auth required)
router.get('/news', getAllNewsPosts);
router.get('/news/:slug', getNewsBySlug);

// Apply auth middleware to protected routes
router.use(authMiddleware);

// Protected routes
router.post('/news', addNewsPost);
router.patch('/news/:id', updateNewsPost);
router.delete('/news/:id', deleteNewsPost);

module.exports = router;