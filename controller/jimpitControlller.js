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
  console.log('getAllJimpitTeams called with query:', req.query);
  
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const where = {};
    if (req.query.day_id) {
      where.dayId = parseInt(req.query.day_id);
    }

    console.log('Database query parameters:', { where, skip, limit });

    const [teams, total] = await Promise.all([
      prisma.jadwal_jimpit.findMany({
        where,
        select: {
          id: true,
          members: true,
          note: true,
          dayId: true,
          day: {
            select: {
              id: true,
              name: true,
              createdAt: true
            }
          },
          createdAt: true
        },
        orderBy: { id: "desc" },
        skip,
        take: limit
      }),
      prisma.jadwal_jimpit.count({ where })
    ]);

    console.log(`Found ${teams.length} teams out of ${total} total`);

    // Parse members safely and format the response
    const formattedTeams = teams.map(team => {
      try {
        const members = team.members ? JSON.parse(team.members) : [];
        console.log(`Team ${team.id} has ${members.length} members`);
        
        // Create a clean team object with all necessary fields
        return {
          id: team.id,
          members: members, // This will be the parsed array
          note: team.note,
          day_id: team.dayId,
          day: team.day,
          created_at: team.createdAt,
          updated_at: team.updatedAt
        };
      } catch (error) {
        console.error(`Error parsing members for team ${team.id}:`, error);
        return {
          ...team,
          members: [],
          error: "Error parsing members data"
        };
      }
    });

    const response = {
      status: 'success',
      data: formattedTeams,
      meta: {
        total,
        page,
        total_pages: Math.ceil(total / limit),
        limit
      }
    };

    console.log('Sending response with', formattedTeams.length, 'teams');
    res.status(200).json(response);
  } catch (err) {
    console.error('Error in getAllJimpitTeams:', {
      message: err.message,
      stack: err.stack,
      query: req.query,
      headers: req.headers
    });
    
    res.status(500).json({ 
      status: 'error',
      message: 'Internal Server Error',
      ...(process.env.NODE_ENV === 'development' && {
        error: err.message,
        stack: err.stack
      })
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
