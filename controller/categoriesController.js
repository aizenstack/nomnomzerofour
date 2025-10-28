const { PrismaClient } = require("../prisma/generated/prisma");
const prisma = new PrismaClient();

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || !name.trim()) return res.status(400).json({ message: "Name is required" });

    const exists = await prisma.categories.findFirst({ where: { name: name.trim() } });
    if (exists) return res.status(400).json({ message: "Category already exists" });

    const newCategory = await prisma.categories.create({
      data: { name: name.trim() },
    });

    res.status(201).json({
      data: newCategory,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};


const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.categories.findMany({
      orderBy: { id: "asc" },
    });

    res.status(200).json({
      data: categories,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await prisma.categories.findUnique({
      where: { id: parseInt(id) },
    });

    if (!category)
      return res.status(404).json({ message: "Category not found" });

    res.status(200).json({
      data: category,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: "Name is required" });

    const existing = await prisma.categories.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing)
      return res.status(404).json({ message: "Category not found" });

    const updated = await prisma.categories.update({
      where: { id: parseInt(id) },
      data: { name },
    });

    res.status(200).json({
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.categories.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing)
      return res.status(404).json({ message: "Category not found" });

    await prisma.categories.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Category deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
