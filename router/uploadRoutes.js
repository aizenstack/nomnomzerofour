const express = require('express');
const { upload } = require('./utils/upload');
const { uploadImage } = require('../controller/uploadController');

const router = express.Router();

// single file input name = "image"
router.post('/image', upload.single('image'), uploadImage);

module.exports = router;
