const { PrismaClient } = require('../prisma/generated/prisma');

const prisma = new PrismaClient();

const addDays = async(req, res) => {
    try {
        const {name} = req.body;
        if (!name)return res.status(400).json({message: 'Name is Required'});

        const newDays = await prisma.days.create({
            data: {
                name
            }
        });
        res.status(201).json({message: 'Add Day Successfuly'})
    }catch{
        res.status(500).json({message: 'Internal Server Error'})
    }
}

module.exports = {
    addDays
}