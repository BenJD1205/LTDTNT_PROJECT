const Hoa = require('../models/hoa.model');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const hoas = await Hoa.find();
            res.json({
                success: true,
                data:hoas
            })
        } catch (err) {
            next(err);
        }
    },
    getByMa: async (req, res, next) => {
        try {
            const hoa = await Hoa.find().where("mahoa",Number(req.params.mahoa))
            res.json({
                success: true,
                data:hoa,
            })
        }
        catch (err) {
            next(err);
        }
    },
    getByMaLoai: async (req, res, next) => {
        try {
            const hoa = await Hoa.find().where("maloai",Number(req.params.maloai))
            res.json({
                success: true,
                data:hoa,
            })
        }
        catch (err) {
            next(err);
        }
    },
    getByName: async (req, res, next) => {
        try {
            const hoa = await Hoa.find({tenhoa: new RegExp(req.params.tenhoa,'i')})
            res.json({
                success: true,
                data:hoa,
            })
        }
        catch (err) {
            next(err);
        }
    }
}