const uploadImage = async(req, res) => {
    try {
        const file = req.body;

        if(!file) return res.status(400).json({message: 'No Image Upload'});

        const imageUrl = `/uploads/news/${file.filename}`;
        return res.status(200).json({ message: 'Image Uploaded Successfully'});
    }catch{
        res.status(500).json({message: 'Internal Server Error'})
    }
}

module.exports = {
    uploadImage
}