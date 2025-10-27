const { PrismaClient } = require("../prisma/generated/prisma");
const prisma = new PrismaClient();

const getDashboardStats = async (req, res) => {
  try {
    const totalFeedback = await prisma.feedback.count();
    const newFeedbackThisWeek = await prisma.feedback.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setDate(new Date().getDate() - 7)),
        },
      },
    });

    const totalUsers = await prisma.user.count();
    const newUsersThisMonth = await prisma.user.count({
      where: {
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
    });

    const unreadFeedback = await prisma.feedback.count({
      where: { isRead: false },
    });
    const respondedFeedback = totalFeedback - unreadFeedback;

    res.json({
      feedback: { total: totalFeedback, newThisWeek: newFeedbackThisWeek },
      users: { total: totalUsers, newThisMonth: newUsersThisMonth },
      comments: { unread: unreadFeedback, responded: respondedFeedback },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getDashboardStats };
