const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProgramSchema = new Schema({

    programName : {
        type: String,
    },

    days : [{
        dayName : String,

        exercises : [{

            exerciseName: String,
            sets: String,
            reps: String
        }]
    }],
  


  
 

    User: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],

});

const Program = mongoose.model("Program", ProgramSchema);

module.exports = Program;