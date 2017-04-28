/**
 * Created by Administrator on 2017/4/1.
 */

var express = require('express');
var router = express.Router();
var ExamEducationModel = require("../models/ExamEducation")
var TrainEducationModel = require("../models/TrainEducation1")

router.get('/', function(req, res,next) {
    Promise.all([
        ExamEducationModel.getEightExamEducation(),
        TrainEducationModel.getEightTrainEducation(),
    ])
        .then(function (result) {
            var exameducation = result[0]
            var traineducation = result[1]
            res.render('home/education/education',{
                exameducation:exameducation,
                traineducation:traineducation,
            });
        })
        .catch(next)
});

router.get('/:eId/education-exam-content',function (req,res,next) {
    var eId = req.params.eId
    ExamEducationModel.getOneExamEducationById(eId)
        .then(function (examone) {
            res.render('home/education/education-exam-content',{
                examone:examone
            })
        })
        .catch(next)
})

router.get('/education-train-vedio1',function (req,res) {
    res.render('home/education/vedio/education-train-vedio1')
})

module.exports = router;