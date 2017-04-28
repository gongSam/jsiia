/**
 * Created by Administrator on 2017/3/13.
 */
/**
 * Created by Administrator on 2017/3/3.
 */

var express = require('express');
var router = express.Router();
var MonitorDynamicsModel = require('../models/MonitorDynamics')
var MemberDynamicsModel = require('../models/MemberDynamics')
var AssociationDynamicsModel = require('../models/AssociationDynamics')

router.get('/', function(req, res,next) {
    Promise.all([
        MonitorDynamicsModel.getSixMDynamicsById(),
        MemberDynamicsModel.getSixMDynamicsById(),
        AssociationDynamicsModel.getSixADynamicsById()
    ])
        .then(function (result) {
            var monidynamics = result[0]
            var memdynamics = result[1]
            var associdynamics = result[2]
            res.render('home/dynamics/dynamics',{
                monidynamics:monidynamics,
                memdynamics:memdynamics,
                associdynamics:associdynamics
            });
        })
        .catch(next)
});

router.get('/dynamics-monitor',function (req,res,next) {
    var pageSize = 1;
    var page = req.query.page-1 || 0;
    MonitorDynamicsModel.toPaging(page*pageSize, page*pageSize+pageSize)
        .then(function (monitordynamics) {
            res.render('home/dynamics/dynamics-monitor',{
                monitordynamics:monitordynamics
            })
        })
        .catch(next)
})

router.get('/:dmoniId/dynamics-monitor-content',function (req,res,next) {
    var dmoniId = req.params.dmoniId
    MonitorDynamicsModel.getOneMDynamicsById(dmoniId)
        .then(function (monidynamics) {
            res.render('home/dynamics/dynamics-monitor-content',{
                monidynamics:monidynamics
            })
        })
        .catch(next)
})

router.get('/dynamics-association',function (req,res,next) {
    AssociationDynamicsModel.getAssociationDynamicsByID()
        .then(function (associationdynamics) {
            res.render('home/dynamics/dynamics-association',{
                associationdynamics:associationdynamics
            })
        })
        .catch(next)
})

router.get('/:dassociId/dynamics-association-content',function (req,res,next) {
    var dassociId = req.params.dassociId
    AssociationDynamicsModel.getOneADynamicsById(dassociId)
        .then(function (associdynamics) {
            res.render('home/dynamics/dynamics-association-content',{
                associdynamics:associdynamics
            })
        })
        .catch(next)
})

router.get('/dynamics-members',function (req,res,next) {
    MemberDynamicsModel.getMemberDynamicsByID()
        .then(function (memberdynamics) {
            res.render ('home/dynamics/dynamics-members',{
               memberdynamics:memberdynamics
            })
        })
        .catch(next)
})

router.get('/:memId/dynamics-members-content',function (req,res,next) {
    var memId = req.params.memId
    MemberDynamicsModel.getOneMDynamicsById(memId)
        .then(function (memdynamics) {
            res.render('home/dynamics/dynamics-members-content',{
                memdynamics:memdynamics
            })
        })
        .catch(next)
})


module.exports = router;

