const express = require('express');
const {
  addCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require('../controller/categoriesController');
const { authMiddleware } = require('./utils/authMiddleware');

const router = express.Router();

router.post('/categories', addCategory);
router.get('/categories', authMiddleware, getAllCategories);
router.get('/categories/:id', authMiddleware, getCategoryById);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

module.exports = router;
