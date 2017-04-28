/**
 * Created by Administrator on 2017/3/3.
 */

var express = require('express');
var router = express.Router();
var AssociationPublishModel = require("../models/AssociationPublish")
var MonitroPublishModel = require("../models/MonitorPublish")

router.get('/', function (req, res, next) {
    Promise.all([
        AssociationPublishModel.getSixAPublishById(),
        MonitroPublishModel.getSixMPublishById()
    ])
        .then(function (result) {
            var associpublish = result[0]
            var monipublish = result[1]

            res.render('home/notice/notice', {
                associpublish: associpublish,
                monipublish: monipublish
            })
        })
        .catch(next)
});

router.get('/notice-monitor', function (req, res, next) {
    MonitroPublishModel.getMonitorPublishByID()
        .then(function (monitorpublish) {
            res.render('home/notice/notice-monitor', {
                monitorpublish: monitorpublish
            })
        })
        .catch(next)
})
router.get('/:moniId/notice-monitor-content', function (req, res, next) {
    var moniId = req.params.moniId
    MonitroPublishModel.getOneMPublishById(moniId)
        .then(function (result) {
            var monipublish = result;
            console.log(result)
            res.render('home/notice/notice-monitor-content', {
                monipublish: monipublish
            })
        })
        .catch(next)
})

router.get('/notice-association', function (req, res, next) {
    AssociationPublishModel.getAssociationPublicByID()
        .then(function (association) {
            res.render('home/notice/notice-association', {
                association: association
            })
        })
        .catch(next)
})

router.get('/:associId/notice-association-content', function (req, res, next) {
    var associId = req.params.associId
    AssociationPublishModel.getOnePublishById(associId)
        .then(function (result) {
            var associpublish = result;
            console.log(result)
            res.render('home/notice/notice-association-content', {
                associpublish: associpublish
            })
        })
        .catch(next)
})


module.exports = router;

