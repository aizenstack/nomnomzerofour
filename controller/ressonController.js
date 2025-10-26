const { PrismaClient } = require("../prisma/generated/prisma");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

const createResson = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token tidak ada" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { content } = req.body;
    if (!content) return res.status(400).json({ message: "Content is required" });

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

const getAllRessons = async (req, res) => {
  try {
    const ressons = await prisma.resson.findMany({
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    res.status(200).json(ressons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createResson,
  getAllRessons,
};
