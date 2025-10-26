const express = require('express');
const { uploadImage } = require('../controller/uploadController');
const upload = require('../utils/upload'); 

const router = express.Router();

router.post('/image', upload.single('image'), uploadImage);

module.exports = router;
