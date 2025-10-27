const { PrismaClient } = require("../prisma/generated/prisma");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

const createResson = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ success: false, message: "Token tidak ada" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const reassonId = decoded.id;

    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ success: false, message: "Content is required" });
    }

    const newResson = await prisma.resson.create({
      data: {
        content,
        reassonId: parseInt(reassonId),
      },
      include: {
        resson: {
          select: {
            id: true,
            username: true
          }
        }
      }
    });

    res.status(201).json({ 
      success: true, 
      message: "Resson created successfully",
      data: newResson
    });
  } catch (err) {
    console.error(err);
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getAllResson = async (req, res) => {
  try {
    const ressons = await prisma.resson.findMany({
      include: {
        resson: {
          select: { 
            id: true,
            username: true 
          }
        }
      },
      orderBy: { 
        createdAt: "desc" 
      },
    });
    
    res.status(200).json({ 
      success: true, 
      data: ressons 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ 
      success: false, 
      message: "Internal Server Error" 
    });
  }
};

module.exports = {
  createResson,
  getAllResson,
};
