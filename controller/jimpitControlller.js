const { PrismaClient } = require("../prisma/generated/prisma");
const prisma = new PrismaClient();

const createdJimpitTeams = async (req, res) => {
  try {
    const { members, note, day_id } = req.body;

    if (!members || !day_id)
      return res.status(400).json({ message: "All Field Is Required" });

    const newTeams = await prisma.jadwal_jimpit.create({
      data: {
        members: Array.isArray(members) ? JSON.stringify(members) : members,
        note,
        dayId: parseInt(day_id),
      },
    });

    res.status(201).json({ message: "Teams created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateJimpitTeams = async (req, res) => {
  try {
    const { id } = req.params;
    const { members, note, day_id } = req.body;

    const existing = await prisma.jadwal_jimpit.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing)
      return res.status(404).json({ message: "Teams not found!" });

    if (!members || !day_id)
      return res.status(400).json({ message: "All Field Is Required" });

    await prisma.jadwal_jimpit.update({
      where: { id: parseInt(id) },
      data: {
        members: Array.isArray(members) ? JSON.stringify(members) : members,
        note,
        dayId: parseInt(day_id),
      },
    });

    res.status(200).json({ message: "Teams updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteJimpitTeams = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.jadwal_jimpit.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing)
      return res.status(404).json({ message: "Team not found" });

    await prisma.jadwal_jimpit.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Team deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllJimpitTeams = async (req, res) => {
  try {
    // Add pagination (default: page 1, 10 items per page)
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Add filtering options
    const where = {};
    if (req.query.day_id) {
      where.dayId = parseInt(req.query.day_id);
    }

    const [teams, total] = await Promise.all([
      prisma.jadwal_jimpit.findMany({
        where,
        include: { day: true },
        orderBy: { id: "desc" },
        skip,
        take: limit,
      }),
      prisma.jadwal_jimpit.count({ where })
    ]);

    // Parse members safely
    const formattedTeams = teams.map((t) => {
      try {
        return {
          ...t,
          members: t.members ? JSON.parse(t.members) : [],
        };
      } catch (error) {
        console.error(`Error parsing members for team ${t.id}:`, error);
        return {
          ...t,
          members: [],
          error: "Error parsing members data"
        };
      }
    });

    res.status(200).json({
      data: formattedTeams,
      meta: {
        total,
        page,
        totalPages: Math.ceil(total / limit),
        limit
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ 
      message: "Internal Server Error",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

const getJimpitTeamById = async (req, res) => {
  try {
    const { id } = req.params;

    const team = await prisma.jadwal_jimpit.findUnique({
      where: { id: parseInt(id) },
      include: { day: true },
    });

    if (!team)
      return res.status(404).json({ message: "Team not found" });

    const formattedTeam = {
      ...team,
      members: team.members ? JSON.parse(team.members) : [],
    };

    res.status(200).json(formattedTeam);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createdJimpitTeams,
  updateJimpitTeams,
  deleteJimpitTeams,
  getAllJimpitTeams,
  getJimpitTeamById,
};
