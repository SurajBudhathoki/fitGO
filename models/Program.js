const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProgramSchema = new Schema({

    programName : {
        type: String,
    },
    days : {
        type: String,
    },
    sets : {
        type: String,
    },
    reps : {
        type: String,
    },
    exercises : {
        type: Array
    },

    User: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    Exercise: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]


});

const Program = mongoose.model("Program", ProgramSchema);

module.exports = Program;