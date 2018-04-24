var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CourseSchema=new Schema({
           code:String,
           name:String,
           credits:String
});
var Course=mongoose.model('Course',CourseSchema);
module.exports=Course;

