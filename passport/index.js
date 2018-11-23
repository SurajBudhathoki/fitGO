const passport = require('passport');
const db = require('../models');
const LocalStrategy = require('./localStrategy');



//serialize user
passport.serializeUser((user,done) => {
    done(null, {_id: user._id})
});

//deserialize the user
passport.deserializeUser((id, done) => {
       db.User.findOne(
           {_id: id},
           'username',
           (err, user) => {
               done(null, user);
           }
       ) 

});

passport.use(LocalStrategy);

module.exports = passport;