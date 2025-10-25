function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const { PrismaClient } = require("../prisma/generated/prisma");
const path = require('path')
const fs  = require('fs')
const prisma = new PrismaClient();

const addNewsPost = async (req, res) => {
  try {
    const { title, content, image_url, authorId, categoryId } = req.body;

    if (!title || !content || !image_url || !authorId || !categoryId)
      return res.status(400).json({ message: "All fields are required!" });

    const slug = generateSlug(title);

    const exists = await prisma.news_post.findUnique({
      where: { slug },
    });

    if (exists)
      return res.status(400).json({ message: "Slug already exists!" });

    const newPost = await prisma.news_post.create({
      data: {
        title,
        content,
        image_url,
        slug,
        authorId: parseInt(authorId),
        categoryId: parseInt(categoryId),
      },
    });

    res.status(201).json({
      message: "News created successfully!",
      data: newPost,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateNewsPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, image_url, categoryId } = req.body;

    const existing = await prisma.news_post.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing)
      return res.status(404).json({ message: "News post not found!" });

    const updateData = {};

    if (title) {
      updateData.title = title;
      updateData.slug = generateSlug(title);

      const sameSlug = await prisma.news_post.findFirst({
        where: {
          slug: updateData.slug,
          NOT: { id: parseInt(id) },
        },
      });

      if (sameSlug)
        return res
          .status(400)
          .json({ message: "Slug already used by another post!" });
    }

    if (content) updateData.content = content;
    if (image_url) updateData.image_url = image_url;
    if (categoryId) updateData.categoryId = parseInt(categoryId);

    updateData.updateAt = new Date();

    const updatedPost = await prisma.news_post.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res.status(200).json({
      message: "News updated successfully!",
      data: updatedPost,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteNewsPost = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.news_post.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing)
      return res.status(404).json({ message: "News post not found!" });

    const imagePath = path.join(__dirname, "..", existing.image_url);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await prisma.news_post.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "News post deleted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addNewsPost,
  updateNewsPost,
  deleteNewsPost,
};
