var express=require('express');
var Student=require('../models/Student');
var router =express.Router();
var mongoose=require('mongoose')


router.get('/',function(req,res,next){
    
   
    // Student.find(function(err,Student){
    //     if(err){
    //        return next(err);
    //     }
    //     res.json();
    // })
})

module.exports=router;