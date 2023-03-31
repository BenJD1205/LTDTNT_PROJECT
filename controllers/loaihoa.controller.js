const Loaihoa = require('../models/loaihoa.model');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const loaihoas = await Loaihoa.find();
            res.json(loaihoas);
        }
        catch (err) {
            next(err);
        }
    },
    getByLoai: async (req, res, next) => {
        try {
            const loaihoa = await Loaihoa.find().where("maloai",Number(req.params.maloai))
            res.json(loaihoa)
        }
        catch (err) {
            
        }
    }
}