const cloudinary = require('../utils/cloudinary');

const uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No Image Upload' });

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'news', // folder di Cloudinary
      use_filename: true,
      unique_filename: false
    });

    return res.status(200).json({
      message: 'Image Uploaded Successfully',
      url: result.secure_url
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  uploadImage
};
