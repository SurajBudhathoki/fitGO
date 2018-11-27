const db = require('../models');

module.exports = function (app) {

    //getting users
    app.get('/api/users', function (req, res) {
        db.User.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });

    });

    //posting the users
    app.post('/api/users', function (req, res) {
        db.User.create(req.body)
            .then(function (data) {
                res.json({
                    success: true
                });
            }).catch(function (err) {
                res.json(err);
            });
    });


    //getting all exercises
    app.get('/api/exercises', function (req, res) {
        db.Exercise.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


    //posting an exercise
    app.post('/api/exercises', function (req, res) {
        db.Exercise.create(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //gettting a single exercise
    app.get('/api/exercises/:id', function (req, res) {
        db.Exercise.findById(req.params.id)
            .then(function (data) {
                res.json(data)
            }).catch(function (err) {
                res.json(err)
            })

    });

    //getting chest exercises
    app.get('/exercises/chest', function (req, res) {
        db.Exercise.find({
                bodyPart: 'Chest'
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //getting leg exercises
    app.get('/exercises/legs', function (req, res) {
        db.Exercise.find({
                bodyPart: 'Legs'
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //getting back exercises
    app.get('/exercises/back', function (req, res) {
        db.Exercise.find({
                bodyPart: 'Back'
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //getting arms exercises
    app.get('/exercises/arms', function (req, res) {
        db.Exercise.find({
                bodyPart: 'Arms'
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //getting shoulders exercises
    app.get('/exercises/shoulders', function (req, res) {
        db.Exercise.find({
                bodyPart: 'Shoulders'
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //getting all programs
    app.get('/api/programs', function (req, res) {
        db.Program.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


    //posting a program
    app.post('/api/programs', function (req, res) {
        db.Program.create(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //posting a day
    app.post('/api/days', function (req, res) {
        db.Days.create(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //get days
    app.get('/api/days', function (req, res) {
        db.Days.find({})
            .populate('exercises.Exercise')
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


}