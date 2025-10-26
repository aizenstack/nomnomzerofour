const uploadImage = async (req, res) => {
    try {
        const file = req.file; 

        if (!file) return res.status(400).json({ message: 'No Image Upload' });

        const imageUrl = `/uploads/news/${file.filename}`;
        return res.status(200).json({ 
            message: 'Image Uploaded Successfully',
            url: imageUrl
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
