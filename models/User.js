const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({

    username : {
        type: String,
        trim: true,
        required: true
    },
    password : {
        type: String,
        required: true
    },

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
