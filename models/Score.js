var mongoose = require('mongoose');

var Score = mongoose.Schema({
    cie: {
        minor1: String,
        minor2: String,
        assignment: String
    },
    see:String
});