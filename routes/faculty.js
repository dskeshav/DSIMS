var express=require('express');
var router =express.Router();
var mongoose=require('mongoose')
var Faculty=require('../models/Faculty');



router.get('/',function(req,res,next){
    Student.find(function(err,Student){
        if(err){
           return next(err);
        }
        res.json();
    })
});

//Search student 
router.get('/:id',function(req,res,next){
    Student.findById(req.params.id,function(err,post){
        if(err) return next(err);
    
    })
})

//update the cie score
router.put('',function(req,res,next){
    Score.findByIdAndUpdate()
})

module.exports=router;