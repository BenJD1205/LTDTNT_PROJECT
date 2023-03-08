const fs = require('fs');
const Hoa = require('../../models/hoa.model');

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
}