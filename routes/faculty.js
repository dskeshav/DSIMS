var express=require('express');
var router =express.Router();
var mongoose=require('mongoose')
var Faculty=require('../models/Faculty');

router.get('/',function(req,res,next){
   // res.render('index.html')
    Student.find(function(err,Student){
        if(err){
           return next(err);
        }
        res.json();
    })
})
router.post('')

module.exports=router;