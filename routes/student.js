var express = require('express');
var Student = require('../models/Student.js');
var Course = require('../models/Course')
var router = express.Router();
var mongoose = require('mongoose')

// router.get('', function (req, res, next) {
//    // res.send("Student");
//     Course.find(function (err, course) {
//         if (err) return next(err);
//         res.json(course);
//     })
// })
router.get('', function (req, res, next) {
   // res.send("Student");
    Student.find(function (err,Student ) {
        if (err) return next(err);
        console.log('Hello'+Student+'Gold')
        res.json(Student);
   })
})
// router.get('/:id',function(req,res,next){
//     Student.find(function(err,Student){
//         if(err){
//            return next(err);
//         }
//         res.json();
//     })
// })

router.get('/:id/scores', function (req, res, next) {
    Student.find(function (err, Score) {
        if (err) return next(err);
        res.json(Score);
    })
})


//get Course list
// router.get('/course', function (req, res, next) {
//     Course.find(function (err, courses) {
//         if (err) return next(err);
//         res.json(courses);
//     });
// });


//Submit course registeration form
router.put('/:id', function (req, res, next) {
    Course.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
module.exports = router;