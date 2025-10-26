const { PrismaClient } = require("../prisma/generated/prisma");
const prisma = new PrismaClient();

const createdJimpitTeams = async (req, res) => {
  try {
    const { members, note, day_id } = req.body;

    if (!members || !day_id)
      return res.status(400).json({ message: "All Field Is Required" });

    const newTeams = await prisma.jadwal_jimpit.create({
      data: {
        members,
        note,
        dayId: parseInt(day_id),
      },
    });
    res.status(201).json({ message: "Teams created successfully" });
  } catch {
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
        members,
        note,
        dayId: parseInt(day_id),
      },
    });
    res.status(200).json({ message: "Teams updated successfully" });
  } catch {
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
    const teams = await prisma.jadwal_jimpit.findMany({
      include: {
        day: true, 
      },
      orderBy: {
        id: "desc",
      },
    });

    res.status(200).json(teams);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getJimpitTeamById = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await prisma.jadwal_jimpit.findUnique({
      where: { id: parseInt(id) },
      include: {
        day: true,
      },
    });

    if (!team)
      return res.status(404).json({ message: "Team not found" });

    res.status(200).json(team);
  } catch {
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
