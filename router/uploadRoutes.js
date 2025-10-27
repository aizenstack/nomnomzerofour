const express = require('express');
const { upload } = require('./utils/upload');
const { uploadImage, uploadFromUrl } = require('../controller/uploadController');
const { authMiddleware } = require('./utils/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/image', upload.single('image'), uploadImage);

router.post('/image/url', uploadFromUrl);

module.exports = router;
