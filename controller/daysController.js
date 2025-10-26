const { PrismaClient } = require('../prisma/generated/prisma');
const prisma = new PrismaClient();

const addDays = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({ message: 'Nama hari wajib diisi!' });
        }

        await prisma.days.create({
            data: { name: name.trim() },
        });

        return res.status(201).json({ message: 'Hari berhasil ditambahkan!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Terjadi kesalahan server!' });
    }
};

const getAllDays = async (req, res) => {
    try {
        const days = await prisma.days.findMany({
            orderBy: { created_at: 'desc' },
        });
        return res.status(200).json({ data: days });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Gagal memuat data hari!' });
    }
};

const deleteDays = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.days.delete({ where: { id } });
        return res.status(200).json({ message: 'Hari berhasil dihapus!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Gagal menghapus hari!' });
    }
};

const updateDays = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({ message: 'Nama hari wajib diisi!' });
        }

        await prisma.days.update({
            where: { id },
            data: { name: name.trim() },
        });

        return res.status(200).json({ message: 'Hari berhasil diperbarui!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Gagal memperbarui hari!' });
    }
};

module.exports = {
    addDays,
    getAllDays,
    deleteDays,
    updateDays,
};
