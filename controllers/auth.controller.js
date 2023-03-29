const User = require('../models/user.model')

module.exports = {
    login: async (req, res, next) => {
        try {
            console.log(req.body.tendangnhap);
            console.log(req.body.matkhau)
            const user = await User.find().where('tendangnhap').equals(req.body.tendangnhap).where('matkhau').equals(req.body.matkhau);
            res.status(201).json(user)
        }
        catch (err) {
            next(err)
        }
    },
    register: async (req, res, next) => {
        const { tendangnhap } = req.body;
        try {
            const userExist = await User.findOne({tendangnhap})
            if (userExist) return res.status(400).json({ message: 'User has been exist!' })
            const user = await User.create(req.body)
            res.status(201).json(user)
        }
        catch (err) {
            next(err)
        }
    }
}