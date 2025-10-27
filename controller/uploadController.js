const cloudinary = require('cloudinary').v2;

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ 
        status: 'error',
        message: 'No image file provided' 
      });
    }

    const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    
    const result = await cloudinary.uploader.upload(base64Image, {
      folder: 'news',
      public_id: `news_${Date.now()}`,
      resource_type: 'auto'
    });

    return res.status(200).json({
      status: 'success',
      message: 'Image uploaded successfully',
      url: result.secure_url,
      public_id: result.public_id
    });

  } catch (error) {
    console.error('Upload Error:', error);
    
    let errorMessage = 'Failed to upload image';
    
    if (error.http_code === 401) {
      errorMessage = 'Invalid Cloudinary credentials';
    } else if (error.http_code === 400) {
      errorMessage = 'Invalid image format or size';
    } else if (error.message && error.message.includes('File too large')) {
      errorMessage = 'File size exceeds the 5MB limit';
    } else if (process.env.NODE_ENV === 'development') {
      errorMessage = error.message;
    }
    
    return res.status(500).json({
      status: 'error',
      message: errorMessage
    });
  }
};

const uploadFromUrl = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    
    if (!imageUrl) {
      return res.status(400).json({
        status: 'error',
        message: 'URL gambar diperlukan'
      });
    }

    try {
      new URL(imageUrl);
    } catch (e) {
      return res.status(400).json({
        status: 'error',
        message: 'URL tidak valid'
      });
    }

    const result = await cloudinary.uploader.upload(imageUrl, {
      folder: 'news',
      public_id: `news_${Date.now()}`,
      resource_type: 'auto'
    });

    return res.status(200).json({
      status: 'success',
      message: 'Gambar berhasil diupload dari URL',
      url: result.secure_url,
      public_id: result.public_id
    });

  } catch (error) {
    console.error('Upload from URL Error:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Gagal mengupload gambar dari URL',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = {
  uploadImage,
  uploadFromUrl
};
