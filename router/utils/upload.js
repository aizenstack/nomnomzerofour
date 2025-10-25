const multer = require('multer')
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '../uploads/news');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp',] ;
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Only Image File are allowed!'), false)
};

const upload = multer({storage, fileFilter});

module.exports = upload;