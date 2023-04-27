const mongoose = require("mongoose");
const validator = require('validator');

const userSchama = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "A user must have name!!"]
    },
    username: {
        type: String,
        unique: true,
        required: [true, "A user must have unique username"]
    },
    email:{
        type: String,
        lowercase: true,
        unique: true,
        validate: (value)=>{
            if(validator.isEmail(value))
              return true;
            else return false;
        }
    }
});

const User = mongoose.model('User', userSchama);

module.exports = User;