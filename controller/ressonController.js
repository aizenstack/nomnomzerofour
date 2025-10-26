const { PrismaClient } = require("../prisma/generated/prisma");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

// CREATE
const createResson = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token tidak ada" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { content } = req.body;
    if (!content)
      return res.status(400).json({ message: "Content is required" });

    await prisma.resson.create({
      data: {
        content,
        userId: parseInt(userId),
      },
    });

    res.status(201).json({ message: "Resson created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET ALL
const getAllResson = async (req, res) => {
  try {
    const ress = await prisma.resson.findMany({
      include: {
        user: {
          select: { username: true }, // cuma ambil username aja
        },
      },
      orderBy: { id: "desc" },
    });
    res.status(200).json(ress);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createResson,
  getAllResson,
};
