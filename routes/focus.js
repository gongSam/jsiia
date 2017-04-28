/**
 * Created by Administrator on 2017/4/18.
 */
var express = require('express');
var router = express.Router();
var FocusModel = require('../models/Focus')

router.get('/', function(req, res,next) {
    FocusModel.getFocus()
        .then(function (focusalls) {
            res.render('home/focus/focus',{
                focusalls:focusalls
            });
        })
        .catch(next)
});

router.get('/:fId/focus-content',function (req,res,next) {
    var fId = req.params.fId
    FocusModel.getOneFocusById(fId)
        .then(function (focusone) {
            res.render('home/focus/focus-content',{
                focusone:focusone
            })
        })
        .catch(next)
})


module.exports = router;