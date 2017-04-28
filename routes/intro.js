/**
 * Created by Administrator on 2017/2/22.
 */
var express = require('express')
var router = express.Router()
var MemberProfessionalModel = require("../models/MemberPrefessional")

router.get('/',function (req,res) {
    res.render('home/intro/intro')
})

router.get('/intro-organization',function (req,res) {
    res.render('home/intro/intro-organization')
})

router.get('/intro-gchapter',function (req,res) {
    res.render('home/intro/intro-gchapter')
})

router.get('/intro-members',function (req,res,next) {
    MemberProfessionalModel.getMemberProfessionalByID()
        .then(function (memberprofessional) {
            res.render('home/intro/intro-members',{
                memberprofessional:memberprofessional
            })
        })
        .catch(next)
})

router.get('/intro-contact',function (req,res) {
    res.render('home/intro/intro-contact')
})

module.exports = router;