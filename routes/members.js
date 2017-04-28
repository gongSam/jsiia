var express = require('express');
var router = express.Router();
var sha1 = require('sha1')
var path = require('path');
var fs = require('fs')
var MembersModel = require('../models/Members')
var NoticeMembersModel = require('../models/NoticeMember')
var DuesMembersModel = require("../models/DuesMembers")
var UpdateMembersModel = require("../models/UpdateMembers")
var DownloadMembersModel = require("../models/DownloadMembers")

router.get('/', function(req, res) {
    res.render('home/members/members');
});


router.get('/members-notice', function(req, res) {
    res.render('home/members/members-notice');
});

router.get('/members-attachment', function(req, res) {
    res.render('home/members/members-attachment');
});

router.get('/members-entry',function (req,res) {
    res.render('home/members/members-entry')
})

router.post('/members-entry',function (req,res,next) {
    var membersname = req.body.membersname
    var memberspassword = req.body.memberspassword

    MembersModel.getMemberByName(membersname)
        .then(function (user) {
            if(!user){
                req.flash('error', '用户不存在')
                return res.redirect('back')
            }

            if (memberspassword !== user.memberspassword) {
                req.flash('error', '您输入的密码错误')
                return res.redirect('back')
            }

            req.flash('success', '登入成功')
            delete user.memberspassword;
            req.session.user = user
            if (membersname == 'admin3') {
                res.redirect('/admin')
            } else {
                res.render('home/members/members-manager',{aa:membersname})
                //res.redirect('/members/members-manager')
            }
        })
        .catch(next)
})

router.get('/members-manager',function (req,res) {
    res.render('home/members/members-manager',{aa:'aa'})
})

router.get('/members-emergency',function (req,res,next) {
    NoticeMembersModel.getAllNoticeMembers()
        .then(function (allmnotice) {
            res.render('home/members/members-emergency',{
                allmnotice:allmnotice
            })
        })
        .catch(next)
})

router.get('/:notId/members-emergency-content', function (req, res, next) {
    var notId = req.params.notId
    NoticeMembersModel.getOneNoticeMembersById(notId)
        .then(function (result) {
            var oneemergency = result;
            console.log(result)
            res.render('home/members/members-emergency-content', {
                oneemergency: oneemergency
            })
        })
        .catch(next)
})

router.get('/members-dues',function (req,res,next) {
    var membersname= req.query.membersname

    DuesMembersModel.getOneDuesMembersByname(membersname)
        .then(function (onedues) {
            res.render('home/members/members-dues',{
                onedues:onedues[0],
                aa: membersname
            })
        })
        .catch(next)
})

router.get('/members-update',function (req,res,next) {
    res.render('home/members/members-update')
})

router.post('/members-update', function (req,res,next) {
    var upcompanytitle = req.body.upcompanytitle
    var upfiletitle = req.body.upfiletitle
    var upfile = req.files.upfile.path.split(path.sep).pop();
    updatemembers = {
        upcompanytitle:upcompanytitle,
        upfiletitle:upfiletitle,
        upfile:upfile
    }
    UpdateMembersModel.create(updatemembers)
        .then(function (result) {
            rupdatemembers = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('back')
        })
})

router.get('/members-download',function (req,res,next) {
    DownloadMembersModel.getAllDownloadMembers()
        .then(function (allmdownload) {
            res.render('home/members/members-download',{
                allmdownload:allmdownload
            })
        })
        .catch(next)
})

router.get('/members-supervise',function (req,res) {
    res.render('home/members/members-supervise')
})

module.exports = router;
