const { PrismaClient } = require("../prisma/generated/prisma");

const prisma = new PrismaClient();

const addCategories = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "name is required" });

    const newCategory = await prisma.categories.create({
      data: {
        name,
      },
    });

    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addCategories,
};
