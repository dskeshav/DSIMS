var express=require('express');
var router =express.Router();
var mongoose=require('mongoose')
var Student=require('../models/Student');

router.get('/',function(req,res,next){
    res.send('Student page')
    // Student.find(function(err,Student){
    //     if(err){
    //        return next(err);
    //     }
    //     res.json();
    // })
})

// router.get('/cie',function(req,res,next){
    
// })
module.exports=router;