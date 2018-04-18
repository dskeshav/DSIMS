var express=require('express');
var router =express.Router();
var mongoose=require('mongoose')
var Faculty=require('../models/Faculty');

router.get('/',function(req,res,next){
    res.send('Facult page')
    // Student.find(function(err,Student){
    //     if(err){
    //        return next(err);
    //     }
    //     res.json();
    // })
})

module.exports=router;