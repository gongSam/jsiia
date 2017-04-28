/**
 * Created by Administrator on 2017/3/14.
 */
var express = require('express');
var router = express.Router();
var RegulationLawModel = require('../models/RegulationLaw')
var DocumentLawModel = require('../models/DocumentLaw')
var DepartmentLawModel = require('../models/DepartmentLaw')

router.get('/', function(req, res,next) {
    Promise.all([
        RegulationLawModel.getSixRLawById(),
        DepartmentLawModel.getSixDLawById(),
        DocumentLawModel.getSixDLawById()
    ])
        .then(function (result) {
            var reglaw = result[0]
            var deplaw = result[1]
            var doclaw = result[2]
            res.render('home/law/law',{
                reglaw:reglaw,
                deplaw:deplaw,
                doclaw:doclaw
            });
        })
        .catch(next)
});

router.get('/law-regulations',function (req,res ,next) {
    RegulationLawModel.getRegulationLawByID()
        .then(function (regulationlaw) {
            res.render('home/law/law-regulations',{
                regulationlaw:regulationlaw
            })
        })
        .catch(next)
})

router.get('/:regId/law-regulations-content',function (req,res,next) {
    var regId = req.params.regId
    RegulationLawModel.getOneRLawById(regId)
        .then(function (reglaw) {
            res.render('home/law/law-regulations-content',{
                reglaw:reglaw
            })
        })
        .catch(next)
})

router.get('/law-document',function (req,res,next) {
    DocumentLawModel.getDocumentLawByID()
        .then(function (documentlaw) {
            res.render('home/law/law-document',{
                documentlaw:documentlaw
            })
        })
        .catch(next)
})

router.get('/:docId/law-document-content',function (req,res,next) {
    var docId = req.params.docId
    DocumentLawModel.getOneDLawById(docId)
        .then(function (doclaw) {
            res.render('home/law/law-document-content',{
                doclaw:doclaw
            })
        })
        .catch(next)
})

router.get('/law-department',function (req,res,next) {
    DepartmentLawModel.getDepartmentLawByID()
        .then(function (departmentlaw) {
            res.render('home/law/law-department',{
                departmentlaw:departmentlaw
            })
        })
        .catch(next)
})

router.get('/:depId/law-department-content',function (req,res,next) {
    var depId = req.params.depId
    DepartmentLawModel.getOneDLawById(depId)
        .then(function (result) {
            var deplaw = result
            console.log(result)
            res.render('home/law/law-department-content',{
                deplaw:deplaw
            })
        })
        .catch(next)
})
module.exports = router;