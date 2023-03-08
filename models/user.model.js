const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    name: {
        type: String,
    },
    address: {
        type:String,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type:String,
        required:true,
    },
    isAdmin: {
        type: Boolean,
    }
})

const User = mongoose.model('User',UserSchema);

module.exports = User;