const express =  require('express');
const {uploadImage} = require('../controller/uploadController')

const router = express.Router();

router.post('/image', uploadImage)

module.exports = router;

