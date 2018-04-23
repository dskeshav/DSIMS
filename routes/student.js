var express=require('express');
var Student=require('../models/Student');
var router =express.Router();
var mongoose=require('mongoose')


router.get('/:id',function(req,res,next){
    Student.find(function(err,Student){
        if(err){
           return next(err);
        }
        res.json();
    })
})

router.get('/:id/scores',function(req,res,next){
    Student.find(function(err,Student){

    })
})

module.exports=router;