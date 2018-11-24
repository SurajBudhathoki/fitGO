const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ExerciseSchema = new Schema({

    exerciseName : {
        type: String,
    },
    bodyPart : {
        type: String,
    },
    difficulty : {
        type: String,
    },
    exerciseImage : {
        type: Array, 
    }


});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
