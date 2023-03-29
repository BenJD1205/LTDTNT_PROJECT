const User = require('../models/user.model');

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const users = await User.find();
            res.json(users)
        }
        catch (err) {
            next(err);
        }
    }
}