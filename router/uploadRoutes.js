const express = require('express');
const { upload } = require('./utils/upload');
const { uploadImage, uploadFromUrl } = require('../controller/uploadController');
const { authMiddleware } = require('./utils/authMiddleware');

const router = express.Router();

// Protect all upload routes with authentication
router.use(authMiddleware);

// 1. Upload dari file
router.post('/image', upload.single('image'), uploadImage);

// 2. Upload dari URL
router.post('/image/url', uploadFromUrl);

module.exports = router;
