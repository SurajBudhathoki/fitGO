const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

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

//using bcrypt methods to hash password
UserSchema.methods = {
    checkPassword: function(userPassword) {
        return bcrypt.compareSync(userPassword, this.password);
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }

}

//saving the hashed password
UserSchema.pre('save', function(next) {
    if(!this.password) {
        console.log('no password given');
        next();
    }
    else  {
        this.password = this.hashPassword(this.password);
        next();
    }
})


const User = mongoose.model("User", UserSchema);

module.exports = User;
