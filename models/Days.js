const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DaysSchema = new Schema({

    dayName : {
        type: String
    },

    

    exercises: [{
        exerciseName: {
            type: String,
        },
        sets: {
            type: String,
        },
        reps: {
            type: String,
        },
    }],
   

   

});

const Days = mongoose.model("Days", DaysSchema);

module.exports = Days;