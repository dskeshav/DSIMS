var mongoose=require('mongoose');

var CourseSchema=new mongoose.Schema({
       course:{
           code:String,
           name:String,
           credits:String,
       }
});
module.exports=mongoose.model('Course',CourseSchema);