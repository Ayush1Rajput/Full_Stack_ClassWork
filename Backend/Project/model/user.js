const { required } = require('joi');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    //     trim: true,
    //     required: true
    // },
    // password: {
    //     type: String,
    //     trim: true,                     // These two thing write by passportLocalMongoose by self
    //     required: true
    // },
    email: {
        type: String,
        trim: true,
        required: true
    },
    role: {
        type: String,
        trim: true,
        required: true
    }
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema)

module.exports = User;