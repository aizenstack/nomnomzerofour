const { PrismaClient } = require("../prisma/generated/prisma");

const prisma = new PrismaClient();

const getAllNoted = async (req, res) => {
  const page = Math.max(parseInt(req.query.page) || 1, 1);
  const limit = Math.min(Math.max(parseInt(req.query.limit) || 5, 1), 50);
  const skip = (page - 1) * limit;

  try {
    const noted = await prisma.noted.findMany({
      where: {
        is_active: 'active'
      },
      skip,
      take: limit,
      orderBy: { id: "asc" },
    });

    const formatted = noted.map(n => ({
      ...n,
      list: n.content.split(",").map(item => item.trim())
    }));

    const total = await prisma.noted.count();
    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      data: formatted,
      page,
      totalPages,
      totalData: total,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    });
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createNoted = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content)
      return res.status(400).json({ message: "Content is required!" });

    const newNoted = await prisma.noted.create({
      data: {
        content,
      },
    });

    res.status(201).json({
      data: newNoted,
    });
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateNoted = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    if(!content) return res.status(400).json({message: 'Content is required!'});

    const existing = await prisma.noted.findUnique({
        where: {
            id: parseInt(id)
        }
    });

    if(!existing)return res.status(404).json({message: 'Data not Found'});

    const updateNote = await prisma.noted.update({
        where: {id: parseInt(id)},
        data: {content}
    });
    res.status(200).json({
        data: updateNote
    })
  } catch {
    res.status(500).json({message: 'Internal Server Error'})
  }
};

const deleteNoted = async (req, res) => {
    try {
        const { id } = req.params;

        const existing = await prisma.noted.findUnique({
            where: { id: parseInt(id)}
        });

        if(!existing)return res.status(404).json({message: 'Data Tidak Ditemukan'});

        await prisma.noted.delete({
            where: {
                id: parseInt(id)
            }
        });

        res.status(200).json({
            message: 'Data Deleted Successfully'
        });
    }catch{
        res.status(500).json({message: 'Internal Server Error'})
    }
};

module.exports = {
  getAllNoted,
  createNoted,
  updateNoted,
  deleteNoted,
};
