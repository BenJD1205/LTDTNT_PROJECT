const { default: mongoose } = require("mongoose");

const hoaSchema = mongoose.Schema({
    mahoa: {
        type: Number,
        require: true,
    },

    maloai: Number,
    tenhoa: String,
    dongia: Number,
    hinh: String,
    mota: String,
});

module.exports = mongoose.model('Hoa', hoaSchema);