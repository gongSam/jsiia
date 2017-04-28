var express = require('express');
var router = express.Router();
var ProposalDiscipline = require("../models/ProposalDiscipline")
var RiskDiscipline = require("../models/RiskDiscipline")
var ChapterDiscipline = require ("../models/ChapterDiscipline")

router.get('/', function(req, res,next) {
    Promise.all([
        ProposalDiscipline.getSixProposalDiscipline(),
        RiskDiscipline.getSixRiskDiscipline(),
        ChapterDiscipline.getSixChapterDiscipline()
    ])
        .then(function (result) {
            var prodiscipline = result[0]
            var riskdiscipline = result[1]
            var chapdiscipline = result[2]
            res.render('home/self-discipline/self-discipline',{
                prodiscipline:prodiscipline,
                riskdiscipline:riskdiscipline,
                chapdiscipline:chapdiscipline
            });
        })
        .catch(next)
});

router.get('/selfdiscipline-proposal',function (req,res,next) {
    ProposalDiscipline.getProposalDiscipline()
        .then(function (alldiscipline) {
            res.render('home/self-discipline/selfdiscipline-proposal',{
                alldiscipline:alldiscipline
            })
        })
        .catch(next)
})

router.get('/:discId/selfdiscipline-proposal-content',function (req,res,next) {
    var discId = req.params.discId
    ProposalDiscipline.getOneProposalDisciplineById(discId)
        .then(function (result) {
            var pdiscipline= result
            res.render('home/self-discipline/selfdiscipline-proposal-content',{
                pdiscipline:pdiscipline
            })
        })
        .catch(next)
})

router.get('/selfdiscipline-risk',function (req,res,next) {

        var pageSize = 1;
        var page = req.query.page-1 || 0;


    RiskDiscipline.toPaging()
        .then(function (riskdiscipline) {
            RiskDiscipline.getTotalPages().then(function(total){
                res.render('home/self-discipline/selfdiscipline-risk',{
                    riskdiscipline:riskdiscipline.slice(page*pageSize, page*pageSize+pageSize),
                    totalPage:Math.floor(total.length/pageSize)
                })
            })

        })
        .catch(next)
})

router.get('/:riskId/selfdiscipline-risk-content',function (req,res,next) {
    var riskId = req.params.riskId
    RiskDiscipline.getOneRiskDisciplineById(riskId)
        .then(function (result) {
            var rdiscipline= result
            res.render('home/self-discipline/selfdiscipline-risk-content',{
                rdiscipline:rdiscipline
            })
        })
        .catch(next)
})

router.get('/selfdiscipline-chapter',function (req,res,next) {
    ChapterDiscipline.getChapterDiscipline()
        .then(function (chapdiscipline) {
            res.render('home/self-discipline/selfdiscipline-chapter',{
                chapdiscipline:chapdiscipline
            })
        })
        .catch(next)
})

router.get('/:chapId/selfdiscipline-chapter-content',function (req,res,next) {
    var chapId = req.params.chapId
    ChapterDiscipline.getOneChapterDisciplineById(chapId)
        .then(function (result) {
            var cdiscipline= result
            res.render('home/self-discipline/selfdiscipline-chapter-content',{
                cdiscipline:cdiscipline
            })
        })
        .catch(next)
})
module.exports = router;