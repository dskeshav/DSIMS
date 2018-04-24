var mongoose = require('mongoose');
var Schema=mongoose.Schema;


var StudentSchema = new Schema({
        firstName: String,
        lastName: String,
        dob: Object,
        gender:String
});
var Student=mongoose.model('Student',StudentSchema);
module.exports = Student;