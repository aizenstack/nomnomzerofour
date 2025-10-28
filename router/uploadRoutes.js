const express = require('express');
const { upload } = require('./utils/upload');
const { uploadImage, uploadFromUrl } = require('../controller/uploadController');
const { authMiddleware } = require('./utils/authMiddleware');

const router = express.Router();


router.post('/image',authMiddleware, upload.single('image'), uploadImage);

router.post('/image/url',authMiddleware, uploadFromUrl);

module.exports = router;
