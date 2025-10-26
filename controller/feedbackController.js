const { PrismaClient } = require("../prisma/generated/prisma");
const prisma = new PrismaClient();

const addFeedback = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content)
      return res.status(400).json({ message: "Title and content are required" });

    const feedback = await prisma.feedback.create({
      data: {
        title,
        content,
        CreatedAt: new Date(),
      },
    });

    res.status(201).json({
      message: "Feedback submitted successfully!",
      data: feedback,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: { CreatedAt: "desc" },
    });

    res.status(200).json({
      message: "All feedback fetched successfully!",
      data: feedbacks,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.feedback.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing)
      return res.status(404).json({ message: "Feedback not found" });

    await prisma.feedback.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Feedback deleted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addFeedback,
  getAllFeedback,
  deleteFeedback,
};
