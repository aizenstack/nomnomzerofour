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

router.use(authMiddleware);

router.post('/categories', addCategory);
router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategoryById);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

module.exports = router;
