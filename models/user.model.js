const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
    {
        tennguoidung: {
            type: String,
            required: true,
        },
        tendangnhap: {
            type: String,
            required: true,
        },
        matkhau: {
            type: String,
            required: true,
        },
        sodienthoai: String,
        email: String
    }
)
module.exports = mongoose.model('User', UserSchema)