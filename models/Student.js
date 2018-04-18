var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    personal_info: {
        firstName: String,
        lastName: String,
        dob: Object,
        gender:String,
        
    }
});
module.exports = mongoose.model('Student', StudentSchema);