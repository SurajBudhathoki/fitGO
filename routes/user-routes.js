const db = require('../models');
const passport  = require('../passport');

module.exports = function(app) {

    app.post('/signup', (req,res)=> {

        const { username, password} = req.body;

        db.User.findOne({ username: username}, (err,user) => {
            if(err) {
                console.log('error occured', err);
            }
            else if (user) {
                res.json({
                    error: `sorry, already have user with username ${username}`
                })
            }
            else {
                const newUser = new User ({
                    username: username,
                    password: password
                })
                newUser.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json(savedUser)
                })
            }

        })
    });


    app.post('/login', function(req,res, next) {
        console.log(res.body);
        next();
    },
    passport.authenticate('local'), (req,res) => {
            console.log('logged in', req.user);
            const userInfo = {
                username : req.user.username
            }
            res.send(userInfo);

    });


    app.get('/', (req, res, next) => {
        console.log('===== user!!======')
        console.log(req.user)
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.json({ user: null })
        }
    })
    

    app.post('/logout', (req, res) => {
        if (req.user) {
            req.logout()
            res.send({ msg: 'logging out' })
        } else {
            res.send({ msg: 'no user to log out' })
        }
    })


};