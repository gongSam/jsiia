/**
 * Created by Administrator on 2017/3/15.
 */

var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs')
var sha1 = require('sha1')


var AssociationPublishModel = require("../models/AssociationPublish")
var MonitorPublishModel = require("../models/MonitorPublish")
var MonitorDynamicsModel = require("../models/MonitorDynamics")
var AssociationDynamicsModel = require("../models/AssociationDynamics")
var MemberDynamicsModel = require("../models/MemberDynamics")
var RegulationLawModel = require("../models/RegulationLaw")
var DocumentLawModel = require("../models/DocumentLaw")
var DepartmentLawModel = require("../models/DepartmentLaw")
var MemberProfessionalModel = require("../models/MemberPrefessional")
var MembersModel = require("../models/Members")
var NoticeMembersModel = require("../models/NoticeMember")
var FocusModel = require("../models/Focus")
var FileFocusModel = require("../models/FileFocus")
var ProposalDisciplineModel = require("../models/ProposalDiscipline")
var RiskDisciplineModel = require("../models/RiskDiscipline")
var ChapterDisciplineModel = require("../models/ChapterDiscipline")
var DuesMembersModel = require("../models/DuesMembers")
var UpdateMembersModel = require("../models/UpdateMembers")
var DownloadMembersModel = require("../models/DownloadMembers")
var ExamEducationModel = require("../models/ExamEducation")
var TrainEducationModel = require("../models/TrainEducation1")


router.get('/', function (req, res) {
    res.render('admin/admin');
});

router.get('/', function (req, res) {
    res.render('admin');
});

/*关于协会*/

router.get('/admin-intro', function (req, res) {
    res.render('admin/admin-intro/admin-intro')
})

router.get('/admin-intro/admin-intro-members', function (req, res) {
    res.render('admin/admin-intro/admin-intro-members')
})

router.post('/admin-intro/admin-intro-members', function (req, res, next) {
    var memptitle = req.body.memptitle;
    var memberprofessional = {
        memptitle: memptitle
    }
    MemberProfessionalModel.create(memberprofessional)
        .then(function (result) {
            var memberprofessional = result.ops[0]
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-intro/admin-intro-memcont')
        })
        .catch(next)
})

router.get('/admin-intro/admin-intro-memcont', function (req, res, next) {
    MemberProfessionalModel.getMemberProfessionalByID()
        .then(function (member1prefessional) {
            res.render('admin/admin-intro/admin-intro-memcont', {
                member1prefessional: member1prefessional,
            })
        })
        .catch(next)
})

router.get('/admin-intro/:mempId/admin-intro-memup', function (req, res, next) {
    var mempId = req.params.mempId
    MemberProfessionalModel.getOneMProfessionalById(mempId)
        .then(function (memonemember) {
            res.render('admin/admin-intro/admin-intro-memup', {
                memonemember: memonemember
            })
        })
        .catch(next)
})

router.post('/admin-intro/:mempId/update', function (req, res, next) {
    var mempId = req.params.mempId
    var memptitle = req.body.memptitle
    MemberProfessionalModel.updateMemberPrefessionalById(mempId, {memptitle: memptitle,})
        .then(function () {
            res.redirect('/admin/admin-intro/admin-intro-memcont')
        })
        .catch(next)
})

router.get('/:mempId/remove', function (req, res, next) {
    var mempId = req.params.mempId
    MemberProfessionalModel.delOneMemberPrefessionalById(mempId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

/*通知公告*/

router.get('/admin-notice', function (req, res) {
    res.render('admin/admin-notice/admin-notice')
})

router.get('/admin-notice/admin-notice-monitor', function (req, res) {
    res.render('admin/admin-notice/admin-notice-monitor')
})

router.post('/admin-notice/admin-notice-monitor', function (req, res, next) {
    var monititle = req.body.monititle;
    var monimonth = req.body.monimonth;
    var moniday = req.body.moniday;
    var monibio = req.body.monibio;
    var monitorpublish = {
        monititle: monititle,
        monimonth: monimonth,
        moniday: moniday,
        monibio: monibio,
    }
    MonitorPublishModel.create(monitorpublish)
        .then(function (result) {
            monitorpublish = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-notice/admin-notice-monicont')
        })
        .catch(next)
})

router.get('/admin-notice/admin-notice-monicont', function (req, res, next) {
    MonitorPublishModel.getMonitorPublishByID()
        .then(function (monitor1publish) {
            res.render('admin/admin-notice/admin-notice-monicont', {
                monitor1publish: monitor1publish,
            })
        })
        .catch(next)
})

router.get('/admin-notice/:moniId/admin-notice-moniup', function (req, res, next) {
    var moniId = req.params.moniId
    MonitorPublishModel.getOneMPublishById(moniId)
        .then(function (result) {
            var monionepublish = result
            res.render('admin/admin-notice/admin-notice-moniup', {
                monionepublish: monionepublish
            })
        })
        .catch(next)
})

router.post('/admin-notice/:moniId/update', function (req, res, next) {
    var moniId = req.params.moniId
    var monititle = req.body.monititle
    var moniday = req.body.moniday
    var monimonth = req.body.monimonth
    var monibio = req.body.monibio
    MonitorPublishModel.updateOnePublishById(moniId, {
        monititle: monititle,
        moniday: moniday,
        monimonth: monimonth,
        monibio: monibio
    })
        .then(function () {
            res.redirect('/admin/admin-notice/admin-notice-monicont')
        })
        .catch(next)
})

router.get('/:moniId/remove', function (req, res, next) {
    var moniId = req.params.moniId
    MonitorPublishModel.delOnePublishById(moniId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-notice/admin-notice-association', function (req, res) {
    res.render('admin/admin-notice/admin-notice-association')
})

router.post('/admin-notice/admin-notice-association', function (req, res, next) {
    var assocititle = req.body.assocititle;
    var associmonth = req.body.associmonth;
    var associday = req.body.associday;
    var associbio = req.body.associbio;
    var associationpublish = {
        assocititle: assocititle,
        associmonth: associmonth,
        associday: associday,
        associbio: associbio,
    }
    AssociationPublishModel.create(associationpublish)
        .then(function (result) {
            associationpublish = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-notice/admin-notice-associcont')
        })
        .catch(next)
})

router.get('/admin-notice/admin-notice-associcont', function (req, res, next) {
    AssociationPublishModel.getAssociationPublicByID()
        .then(function (association1publish) {
            res.render('admin/admin-notice/admin-notice-associcont', {
                association1publish: association1publish,
            })
        })
        .catch(next)
})

router.get('/admin-notice/:associId/admin-notice-associup', function (req, res, next) {
    var associId = req.params.associId
    AssociationPublishModel.getOnePublishById(associId)
        .then(function (associonepublish) {
            res.render('admin/admin-notice/admin-notice-associup', {
                associonepublish: associonepublish
            })
        })
        .catch(next)
})

router.post('/admin-notice/:associId/associpupdate', function (req, res, next) {
    var associId = req.params.associId
    var assocititle = req.body.assocititle
    var associday = req.body.associday
    var associmonth = req.body.associmonth
    var associbio = req.body.associbio
    AssociationPublishModel.updateMOnePublishById(associId, {
        assocititle: assocititle,
        associday: associday,
        associmonth: associmonth,
        associbio: associbio
    })
        .then(function () {
            res.redirect('/admin/admin-notice/admin-notice-associcont')
        })
        .catch(next)
})

router.get('/:associId/associpremove', function (req, res, next) {
    var associId = req.params.associId
    AssociationPublishModel.delOnePublishById(associId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

/*行业动态*/

router.get('/admin-dynamics', function (req, res) {
    res.render('admin/admin-dynamics/admin-dynamics')
})

router.get('/admin-dynamics/admin-dynamics-monitor', function (req, res) {
    res.render('admin/admin-dynamics/admin-dynamics-monitor')
})

router.post('/admin-dynamics/admin-dynamics-monitor', function (req, res, next) {
    var dmonititle = req.body.dmonititle;
    var dmonimonth = req.body.dmonimonth;
    var dmoniday = req.body.dmoniday;
    var dmonibio = req.body.dmonibio;
    var monitordynamics = {
        dmonititle: dmonititle,
        dmonimonth: dmonimonth,
        dmoniday: dmoniday,
        dmonibio: dmonibio,
    }
    MonitorDynamicsModel.create(monitordynamics)
        .then(function (result) {
            monitordynamics = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-dynamics/admin-dynamics-monicont')
        })
        .catch(next)
})

router.get('/admin-dynamics/admin-dynamics-monicont', function (req, res, next) {
    MonitorDynamicsModel.getMonitorDynamicsByID()
        .then(function (dmonitor1dynamics) {
            res.render('admin/admin-dynamics/admin-dynamics-monicont', {
                dmonitor1dynamics: dmonitor1dynamics
            })
        })
        .catch(next)
})

router.get('/admin-dynamics/:dmoniId/admin-dynamics-moniup', function (req, res, next) {
    var dmoniId = req.params.dmoniId
    MonitorDynamicsModel.getOneMDynamicsById(dmoniId)
        .then(function (result) {
            var dmonionedynamics = result
            res.render('admin/admin-dynamics/admin-dynamics-moniup', {
                dmonionedynamics: dmonionedynamics
            })
        })
        .catch(next)
})

router.post('/admin-dynamics/:dmoniId/dmonidupdate', function (req, res, next) {
    var dmoniId = req.params.dmoniId
    var dmonititle = req.body.dmonititle
    var dmoniday = req.body.dmoniday
    var dmonimonth = req.body.dmonimonth
    var dmonibio = req.body.dmonibio
    MonitorDynamicsModel.updateOneMDynamicsById(dmoniId, {
        dmonititle: dmonititle,
        dmoniday: dmoniday,
        dmonimonth: dmonimonth,
        dmonibio: dmonibio
    })
        .then(function () {
            res.redirect('/admin/admin-dynamics/admin-dynamics-monicont')
        })
        .catch(next)
})

router.get('/:dmoniId/dmoniremove', function (req, res, next) {
    var dmoniId = req.params.dmoniId
    MonitorDynamicsModel.delOneMDynamicsById(dmoniId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-dynamics/admin-dynamics-association', function (req, res) {
    res.render('admin/admin-dynamics/admin-dynamics-association')
})

router.post('/admin-dynamics/admin-dynamics-association', function (req, res, next) {
    var dassocititle = req.body.dassocititle;
    var dassocimonth = req.body.dassocimonth;
    var dassociday = req.body.dassociday;
    var dassocibio = req.body.dassocibio;
    var associationdynamics = {
        dassocititle: dassocititle,
        dassocimonth: dassocimonth,
        dassociday: dassociday,
        dassocibio: dassocibio,
    }
    AssociationDynamicsModel.create(associationdynamics)
        .then(function (result) {
            associationdynamics = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-dynamics/admin-dynamics-associcont')
        })
        .catch(next)
})

router.get('/admin-dynamics/admin-dynamics-associcont', function (req, res, next) {
    AssociationDynamicsModel.getAssociationDynamicsByID()
        .then(function (association1dynamics) {
            res.render('admin/admin-dynamics/admin-dynamics-associcont', {
                association1dynamics: association1dynamics
            })
        })
        .catch(next)
})

router.get('/admin-dynamics/:dassociId/admin-dynamics-associup', function (req, res, next) {
    var dassociId = req.params.dassociId
    AssociationDynamicsModel.getOneADynamicsById(dassociId)
        .then(function (associonedynamics) {
            res.render('admin/admin-dynamics/admin-dynamics-associup', {
                associonedynamics: associonedynamics
            })
        })
        .catch(next)
})

router.post('/admin-dynamics/:dassociId/dassociupdate', function (req, res, next) {
    var dassociId = req.params.dassociId
    var dassocititle = req.body.dassocititle
    var dassociday = req.body.dassociday
    var dassocimonth = req.body.dassocimonth
    var dassocibio = req.body.dassocibio
    AssociationDynamicsModel.updateOneMDynamicsById(dassociId, {
        dassocititle: dassocititle,
        dassociday: dassociday,
        dassocimonth: dassocimonth,
        dassocibio: dassocibio
    })
        .then(function () {
            res.redirect('/admin/admin-dynamics/admin-dynamics-associcont')
        })
        .catch(next)
})

router.get('/:dassociId/dassociremove', function (req, res, next) {
    var dassociId = req.params.dassociId
    AssociationDynamicsModel.delOneMDynamicsById(dassociId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-dynamics/admin-dynamics-member', function (req, res) {
    res.render('admin/admin-dynamics/admin-dynamics-member')
})

router.post('/admin-dynamics/admin-dynamics-member', function (req, res, next) {
    var memtitle = req.body.memtitle;
    var memmonth = req.body.memmonth;
    var memday = req.body.memday;
    var membio = req.body.membio;
    var memberdynamics = {
        memtitle: memtitle,
        memmonth: memmonth,
        memday: memday,
        membio: membio,
    }
    MemberDynamicsModel.create(memberdynamics)
        .then(function (result) {
            memberdynamics = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-dynamics/admin-dynamics-memcont')
        })
        .catch(next)
})

router.get('/admin-dynamics/admin-dynamics-memcont', function (req, res, next) {
    MemberDynamicsModel.getMemberDynamicsByID()
        .then(function (member1dynamics) {
            res.render('admin/admin-dynamics/admin-dynamics-memcont', {
                member1dynamics: member1dynamics
            })
        })
        .catch(next)
})

router.get('/admin-dynamics/:memId/admin-dynamics-memup', function (req, res, next) {
    var memId = req.params.memId
    MemberDynamicsModel.getOneMDynamicsById(memId)
        .then(function (memonedynamics) {
            res.render('admin/admin-dynamics/admin-dynamics-memup', {
                memonedynamics: memonedynamics
            })
        })
        .catch(next)
})

router.post('/admin-dynamics/:memId/memupdate', function (req, res, next) {
    var memId = req.params.memId
    var memtitle = req.body.memtitle
    var memday = req.body.memday
    var memmonth = req.body.memmonth
    var membio = req.body.membio
    MemberDynamicsModel.updateOneMDynamicsById(memId, {
        memtitle: memtitle,
        memday: memday,
        memmonth: memmonth,
        membio: membio
    })
        .then(function () {
            res.redirect('/admin/admin-dynamics/admin-dynamics-memcont')
        })
        .catch(next)
})

router.get('/:memId/memremove', function (req, res, next) {
    var memId = req.params.memId
    MemberDynamicsModel.delOneMDynamicsById(memId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

/*法律法规*/

router.get('/admin-law', function (req, res, next) {
    res.render('admin/admin-law/admin-law')
})

router.get('/admin-law/admin-law-regulation', function (req, res) {
    res.render('admin/admin-law/admin-law-regulation')
})

router.post('/admin-law/admin-law-regulation', function (req, res, next) {
    var regtitle = req.body.regtitle;
    var regmonth = req.body.regmonth;
    var regday = req.body.regday;
    var regbio = req.body.regbio;
    var regulationlaw = {
        regtitle: regtitle,
        regmonth: regmonth,
        regday: regday,
        regbio: regbio,
    }
    RegulationLawModel.create(regulationlaw)
        .then(function (result) {
            regulationlaw = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-law/admin-law-regcont')
        })
        .catch(next)
})

router.get('/admin-law/admin-law-regcont', function (req, res, next) {
    RegulationLawModel.getRegulationLawByID()
        .then(function (regulation1law) {
            res.render('admin/admin-law/admin-law-regcont', {
                regulation1law: regulation1law
            })
        })
        .catch(next)
})

router.get('/admin-law/:regId/admin-law-regup', function (req, res, next) {
    var regId = req.params.regId
    RegulationLawModel.getOneRLawById(regId)
        .then(function (regonelaw) {
            res.render('admin/admin-law/admin-law-regup', {
                regonelaw: regonelaw
            })
        })
        .catch(next)
})

router.post('/admin-law/:regId/regupdate', function (req, res, next) {
    var regId = req.params.regId
    var regtitle = req.body.regtitle
    var regday = req.body.regday
    var regmonth = req.body.regmonth
    var regbio = req.body.regbio
    RegulationLawModel.updateOneRLawById(regId, {
        regtitle: regtitle,
        regday: regday,
        regmonth: regmonth,
        regbio: regbio
    })
        .then(function () {
            res.redirect('/admin/admin-law/admin-law-regcont')
        })
        .catch(next)
})

router.get('/:regId/regremove', function (req, res, next) {
    var regId = req.params.regId
    RegulationLawModel.delOneRLawById(regId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-law/admin-law-document', function (req, res) {
    res.render('admin/admin-law/admin-law-document')
})

router.post('/admin-law/admin-law-document', function (req, res, next) {
    var doctitle = req.body.doctitle;
    var docmonth = req.body.docmonth;
    var docday = req.body.docday;
    var docbio = req.body.docbio;
    var documentlaw = {
        doctitle: doctitle,
        docmonth: docmonth,
        docday: docday,
        docbio: docbio,
    }
    DocumentLawModel.create(documentlaw)
        .then(function (result) {
            documentlaw = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-law/admin-law-doccont')
        })
        .catch(next)
})

router.get('/admin-law/admin-law-doccont', function (req, res, next) {
    DocumentLawModel.getDocumentLawByID()
        .then(function (document1law) {
            res.render('admin/admin-law/admin-law-doccont', {
                document1law: document1law
            })
        })
        .catch(next)
})

router.get('/admin-law/:docId/admin-law-docup', function (req, res, next) {
    var docId = req.params.docId
    DocumentLawModel.getOneDLawById(docId)
        .then(function (doconelaw) {
            res.render('admin/admin-law/admin-law-docup', {
                doconelaw: doconelaw
            })
        })
        .catch(next)
})

router.post('/admin-law/:docId/docupdate', function (req, res, next) {
    var docId = req.params.docId
    var doctitle = req.body.doctitle
    var docday = req.body.docday
    var docmonth = req.body.docmonth
    var docbio = req.body.docbio
    DocumentLawModel.updateOneDLawById(docId, {doctitle: doctitle, docday: docday, docmonth: docmonth, docbio: docbio})
        .then(function () {
            res.redirect('/admin/admin-law/admin-law-doccont')
        })
        .catch(next)
})

router.get('/:docId/docremove', function (req, res, next) {
    var docId = req.params.docId
    DocumentLawModel.delOneDLawById(docId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-law/admin-law-department', function (req, res) {
    res.render('admin/admin-law/admin-law-department')
})

router.post('/admin-law/admin-law-department', function (req, res, next) {
    var deptitle = req.body.deptitle;
    var depmonth = req.body.depmonth;
    var depday = req.body.depday;
    var depbio = req.body.depbio;
    var departmentlaw = {
        deptitle: deptitle,
        depmonth: depmonth,
        depday: depday,
        depbio: depbio,
    }
    DepartmentLawModel.create(departmentlaw)
        .then(function (result) {
            departmentlaw = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-law/admin-law-depcont')
        })
        .catch(next)
})

router.get('/admin-law/admin-law-depcont', function (req, res, next) {
    DepartmentLawModel.getDepartmentLawByID()
        .then(function (department1law) {
            res.render('admin/admin-law/admin-law-depcont', {
                department1law: department1law
            })
        })
        .catch(next)
})

router.get('/admin-law/:depId/admin-law-depup', function (req, res, next) {
    var depId = req.params.depId
    DepartmentLawModel.getOneDLawById(depId)
        .then(function (deponelaw) {
            res.render('admin/admin-law/admin-law-depup', {
                deponelaw: deponelaw
            })
        })
        .catch(next)
})

router.post('/admin-law/:depId/depupdate', function (req, res, next) {
    var depId = req.params.depId
    var deptitle = req.body.deptitle
    var depday = req.body.depday
    var depmonth = req.body.depmonth
    var depbio = req.body.depbio
    DepartmentLawModel.updateOneRLawById(depId, {
        deptitle: deptitle,
        depday: depday,
        depmonth: depmonth,
        depbio: depbio
    })
        .then(function () {
            res.redirect('/admin/admin-law/admin-law-depcont')
        })
        .catch(next)
})

router.get('/:depId/depremove', function (req, res, next) {
    var depId = req.params.depId
    DepartmentLawModel.delOneRLawById(depId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

/*会员之家*/

router.get('/admin-members', function (req, res, next) {
    res.render('admin/admin-members/admin-members')
})

router.get('/admin-members/admin-members-members', function (req, res, next) {
    res.render('admin/admin-members/admin-members-members')
})

router.post('/admin-members/admin-members-members', function (req, res, next) {
    var membersname = req.body.membersname
    var memberspassword = req.body.memberspassword
    var members = {
        membersname: membersname,
        memberspassword: memberspassword
    }

    MembersModel.create(members)
        .then(function (result) {
            members = result.ops[0]
            return res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-members/admin-members-memcont', function (req, res, next) {
    MembersModel.getAllMembersByID()
        .then(function (members) {
            res.render('admin/admin-members/admin-members-memcont', {
                members: members
            })
        })
        .catch(next)
})

router.get('/admin-members/:membersId/admin-members-memup', function (req, res, next) {
    var membersId = req.params.membersId
    MembersModel.getOneMembersById(membersId)
        .then(function (membersone) {
            res.render('admin/admin-members/admin-members-memup', {
                membersone: membersone
            })
        })
        .catch(next)
})

router.post('/admin-members/:membersId/memupdate', function (req, res, next) {
    var membersId = req.params.membersId
    var membersname = req.body.membersname
    var memberspassword = req.body.memberspassword

    MembersModel.updateOneMembersById(membersId, {membersname: membersname, memberspassword: memberspassword,})
        .then(function () {
            res.redirect('/admin/admin-members/admin-members-memcont')
        })
        .catch(next)
})

router.get('/:membersId/membersremove', function (req, res, next) {
    var membersId = req.params.membersId
    MembersModel.delOneMembersById(membersId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/:membersId/memberslogout', function (req, res, next) {
    // 清空 session 中用户信息
    req.session.user = null;
    req.flash('success', '登出成功');
    // 登出成功后跳转到主页
    res.redirect('/');
});

router.get('/admin-members/admin-members-notice', function (req, res, next) {
    res.render('admin/admin-members/admin-members-notice')
})

router.post('/admin-members/admin-members-notice', function (req, res, next) {
    var ntitle = req.body.ntitle;
    var nmonth = req.body.nmonth;
    var nday = req.body.nday;
    var nyear = req.body.nyear;
    var nbio = req.body.nbio;
    var noticemembers = {
        ntitle: ntitle,
        nmonth: nmonth,
        nday: nday,
        nyear: nyear,
        nbio: nbio,
    }
    NoticeMembersModel.create(noticemembers)
        .then(function (result) {
            noticemembers = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-members/admin-members-notcont')
        })
        .catch(next)
})

router.get('/admin-members/admin-members-notcont', function (req, res, next) {
    NoticeMembersModel.getAllNoticeMembers()
        .then(function (allnotices) {
            res.render('admin/admin-members/admin-members-notcont', {
                allnotices: allnotices
            })
        })
        .catch(next)
})

router.get('/admin-members/:notId/admin-members-notup', function (req, res, next) {
    var notId = req.params.notId
    NoticeMembersModel.getOneNoticeMembersById(notId)
        .then(function (onenotice) {
            res.render('admin/admin-members/admin-members-notup', {
                onenotice: onenotice
            })
        })
        .catch(next)
})

router.post('/admin-members/:notId/notupdate', function (req, res, next) {
    var notId = req.params.notId
    var ntitle = req.body.ntitle;
    var nmonth = req.body.nmonth;
    var nday = req.body.nday;
    var nyear = req.body.nyear;
    var nbio = req.body.nbio;

    NoticeMembersModel.updateOneNoticeMembersById(notId, {ntitle: ntitle, nmonth:nmonth,nday:nday, nyear:nyear , nbio:nbio})
        .then(function () {
            res.redirect('/admin/admin-members/admin-members-notcont')
        })
        .catch(next)
})

router.get('/:notId/notremove', function (req, res, next) {
    var notId = req.params.notId
    NoticeMembersModel.delOneNoticeMembersById(notId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-members/admin-members-dues', function (req, res, next) {
    res.render('admin/admin-members/admin-members-dues')
})

router.post('/admin-members/admin-members-dues', function (req, res, next) {
    var membersname = req.body.membersname;
    var ddues = req.body.ddues;

    var duesmembers = {
        membersname: membersname,
        ddues: ddues,
    }
    DuesMembersModel.create(duesmembers)
        .then(function (result) {
            duesmembers = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-members/admin-members-duescont')
        })
        .catch(next)
})

router.get('/admin-members/admin-members-duescont', function (req, res, next) {
    DuesMembersModel.getAllDuesMembers()
        .then(function (alldues) {
            res.render('admin/admin-members/admin-members-duescont', {
                alldues: alldues
            })
        })
        .catch(next)
})

router.get('/admin-members/:duesId/admin-members-duesup', function (req, res, next) {
    var duesId = req.params.duesId
    DuesMembersModel.getOneDuesMembersById(duesId)
        .then(function (onedues) {
            res.render('admin/admin-members/admin-members-duesup', {
                onedues: onedues
            })
        })
        .catch(next)
})

router.post('/admin-members/:duesId/duesupdate', function (req, res, next) {
    var duesId = req.params.duesId
    var membersname = req.body.membersname;
    var ddues = req.body.ddues;

    DuesMembersModel.updateOneDuesMembersById(duesId, {membersname: membersname, ddues:ddues,})
        .then(function () {
            res.redirect('/admin/admin-members/admin-members-duescont')
        })
        .catch(next)
})

router.get('/:duesId/duesremove', function (req, res, next) {
    var duesId = req.params.duesId
    DuesMembersModel.delOneDuesMembersById(duesId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-members/admin-members-upcont', function (req, res, next) {
    UpdateMembersModel.getAllUpdateMembers()
        .then(function (allupdates) {
            res.render('admin/admin-members/admin-members-upcont', {
                allupdates: allupdates
            })
        })
        .catch(next)
})

router.get('/:upId/updateremove', function (req, res, next) {
    var upId = req.params.upId
    UpdateMembersModel.delOneUpdateMembersById(upId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-members/admin-members-download', function (req, res, next) {
    res.render('admin/admin-members/admin-members-download')
})

router.post('/admin-members/admin-members-download', function (req,res,next) {
    var downfiletitle = req.body.downfiletitle
    var downfile = req.files.downfile.path.split(path.sep).pop();
    downloadmembers = {
        downfiletitle:downfiletitle,
        downfile:downfile
    }
    DownloadMembersModel.create(downloadmembers)
        .then(function (result) {
            downloadmembers = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('back')
        })
})

/*热点关注*/

router.get('/admin-focus', function (req, res) {
    res.render('admin/admin-focus/admin-focus')
})

router.get('/admin-focus/admin-focus-focus', function (req, res) {
    res.render('admin/admin-focus/admin-focus-focus')
})

router.post('/admin-focus/admin-focus-focus', function (req, res, next) {
    var ftitle = req.body.ftitle;
    var fmonth = req.body.fmonth;
    var fday = req.body.fday;
    var fyear = req.body.fyear;
    var fbio = req.body.fbio;
    var focus = {
        ftitle: ftitle,
        fmonth: fmonth,
        fday: fday,
        fyear: fyear,
        fbio: fbio,
    }
    FocusModel.create(focus)
        .then(function (result) {
            documentlaw = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-focus/admin-focus-fcont')
        })
        .catch(next)
})

router.get('/admin-focus/admin-focus-fcont', function (req, res, next) {
    FocusModel.getFocus()
        .then(function (focusall) {
            res.render('admin/admin-focus/admin-focus-fcont', {
                focusall: focusall
            })
        })
        .catch(next)
})

router.get('/admin-focus/:fId/admin-focus-fup', function (req, res, next) {
    var fId = req.params.fId
    FocusModel.getOneFocusById(fId)
        .then(function (focusone) {
            res.render('admin/admin-focus/admin-focus-fup', {
                focusone: focusone
            })
        })
        .catch(next)
})

router.post('/admin-focus/:fId/fupdate', function (req, res, next) {
    var fId = req.params.fId
    var ftitle = req.body.ftitle
    var fmonth = req.body.fmonth
    var fday = req.body.fday
    var fyear = req.body.fyear
    var fbio = req.body.fbio

    FocusModel.updateOneFocusById(fId, {ftitle: ftitle, fmonth: fmonth, fday: fday, fyear: fyear, fbio: fbio})
        .then(function () {
            res.redirect('/admin/admin-focus/admin-focus-fcont')
        })
        .catch(next)
})

router.get('/:fId/focusremove', function (req, res, next) {
    var fId = req.params.fId
    FocusModel.delOneFocusById(fId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-focus/admin-focus-files', function (req, res, next) {
    res.render('admin/admin-focus/admin-focus-files')
})

router.post('/admin-focus/admin-focus-files', function (req, res, next) {
    var favatar = req.files.favatar.path.split(path.sep).pop();
    var filefocus = {
        favatar: favatar
    }
    FileFocusModel.create(filefocus)
        .then(function (result) {
            filefocus = result.ops[0]
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-focus/admin-focus-filecont')
        })
        .catch(next)
})

router.get('/admin-focus/admin-focus-filecont', function (req, res, next) {
    FileFocusModel.getFileFocus()
        .then(function (ffocusall) {
            res.render('admin/admin-focus/admin-focus-filecont', {
                ffocusall: ffocusall
            })
        })
        .catch(next)
})

router.get('/admin-focus/:ffId/admin-focus-fileup', function (req, res, next) {
    var ffId = req.params.ffId
    FileFocusModel.getOneFileFocusById(ffId)
        .then(function (oneffocus) {
            res.render('admin/admin-focus/admin-focus-fileup', {
                oneffocus:oneffocus
            })
        })
        .catch(next)
})

router.post('/admin-focus/:ffId/fileupdate', function (req, res, next) {
    var ffId = req.params.ffId
    var favatar = req.files.favatar.path.split(path.sep).pop();

    FileFocusModel.updateOneFileFocusById(ffId, {favatar: favatar })
        .then(function () {
            res.redirect('/admin/admin-focus/admin-focus-filecont')
        })
        .catch(next)
})

router.get('/:ffId/fileremove', function (req, res, next) {
    var ffId = req.params.ffId
    FileFocusModel.delOneFileFocusById(ffId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

/*行业自律*/

router.get('/admin-selfdiscipline', function (req, res) {
    res.render('admin/admin-selfdiscipline/admin-selfdiscipline')
})

router.get('/admin-selfdiscipline/admin-selfdiscipline-proposal', function (req, res) {
    res.render('admin/admin-selfdiscipline/admin-selfdiscipline-proposal')
})

router.post('/admin-selfdiscipline/admin-selfdiscipline-proposal', function (req, res, next) {
    var disctitle = req.body.disctitle;
    var discbio= req.body.discbio;
    var proposaldiscipline= {
        disctitle: disctitle,
        discbio: discbio,
    }
    ProposalDisciplineModel.create(proposaldiscipline)
        .then(function (result) {
            proposaldiscipline = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-selfdiscipline/admin-selfdiscipline-procont')
        })
        .catch(next)
})

router.get('/admin-selfdiscipline/admin-selfdiscipline-procont', function (req, res, next) {
    ProposalDisciplineModel.getProposalDiscipline()
        .then(function (proposaldiscipline) {
            res.render('admin/admin-selfdiscipline/admin-selfdiscipline-procont', {
                proposaldiscipline: proposaldiscipline
            })
        })
        .catch(next)
})

router.get('/admin-selfdiscipline/:discId/admin-selfdiscipline-proup', function (req, res, next) {
    var discId = req.params.discId
    ProposalDisciplineModel.getOneProposalDisciplineById(discId)
        .then(function (selfdiscipline) {
            res.render('admin/admin-selfdiscipline/admin-selfdiscipline-proup', {
                selfdiscipline:selfdiscipline
            })
        })
        .catch(next)
})

router.post('/admin-selfdiscipline/:discId/proupdate', function (req, res, next) {
    var discId = req.params.discId
    var disctitle = req.body.disctitle
    var discbio = req.body.discbio

    ProposalDisciplineModel.updateProposalDisciplineById(discId, {disctitle: disctitle, discbio: discbio})
        .then(function () {
            res.redirect('/admin/admin-selfdiscipline/admin-selfdiscipline-procont')
        })
        .catch(next)
})

router.get('/:discId/discremove', function (req, res, next) {
    var discId = req.params.discId
    ProposalDisciplineModel.delOneDiscById(discId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-selfdiscipline/admin-selfdiscipline-risk', function (req, res) {
    res.render('admin/admin-selfdiscipline/admin-selfdiscipline-risk')
})

router.post('/admin-selfdiscipline/admin-selfdiscipline-risk', function (req, res, next) {
    var risktitle = req.body.risktitle;
    var riskbio= req.body.riskbio;
    var riskdiscipline= {
        risktitle: risktitle,
        riskbio: riskbio,
    }
    RiskDisciplineModel.create(riskdiscipline)
        .then(function (result) {
            riskdiscipline = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-selfdiscipline/admin-selfdiscipline-riskcont')
        })
        .catch(next)
})

router.get('/admin-selfdiscipline/admin-selfdiscipline-riskcont', function (req, res, next) {
    RiskDisciplineModel.getRiskDiscipline()
        .then(function (riskdiscipline) {
            res.render('admin/admin-selfdiscipline/admin-selfdiscipline-riskcont', {
                riskdiscipline: riskdiscipline
            })
        })
        .catch(next)
})

router.get('/admin-selfdiscipline/:riskId/admin-selfdiscipline-riskup', function (req, res, next) {
    var riskId = req.params.riskId
    RiskDisciplineModel.getOneRiskDisciplineById(riskId)
        .then(function (risdiscipline) {
            res.render('admin/admin-selfdiscipline/admin-selfdiscipline-riskup', {
                risdiscipline:risdiscipline
            })
        })
        .catch(next)
})

router.post('/admin-selfdiscipline/:riskId/riskupdate', function (req, res, next) {
    var riskId = req.params.riskId
    var risktitle = req.body.risktitle
    var riskbio = req.body.riskbio

    RiskDisciplineModel.updateRiskDisciplineById(riskId, {risktitle: risktitle, riskbio: riskbio})
        .then(function () {
            res.redirect('/admin/admin-selfdiscipline/admin-selfdiscipline-riskcont')
        })
        .catch(next)
})

router.get('/:riskId/riskremove', function (req, res, next) {
    var riskId = req.params.riskId
    RiskDisciplineModel.delOneRiskById(riskId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-selfdiscipline/admin-selfdiscipline-chapter', function (req, res) {
    res.render('admin/admin-selfdiscipline/admin-selfdiscipline-chapter')
})

router.post('/admin-selfdiscipline/admin-selfdiscipline-chapter', function (req, res, next) {
    var chaptitle = req.body.chaptitle;
    var chapbio= req.body.chapbio;
    var chapterdiscipline= {
        chaptitle: chaptitle,
        chapbio: chapbio,
    }
    ChapterDisciplineModel.create(chapterdiscipline)
        .then(function (result) {
            chapterdiscipline = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-selfdiscipline/admin-selfdiscipline-chapcont')
        })
        .catch(next)
})

router.get('/admin-selfdiscipline/admin-selfdiscipline-chapcont', function (req, res, next) {
    ChapterDisciplineModel.getChapterDiscipline()
        .then(function (chapterdiscipline) {
            res.render('admin/admin-selfdiscipline/admin-selfdiscipline-chapcont', {
                chapterdiscipline: chapterdiscipline
            })
        })
        .catch(next)
})

router.get('/admin-selfdiscipline/:chapId/admin-selfdiscipline-chapup', function (req, res, next) {
    var chapId = req.params.chapId
    ChapterDisciplineModel.getOneChapterDisciplineById(chapId)
        .then(function (chadiscipline) {
            res.render('admin/admin-selfdiscipline/admin-selfdiscipline-chapup', {
                chadiscipline:chadiscipline
            })
        })
        .catch(next)
})

router.post('/admin-selfdiscipline/:chapId/chapupdate', function (req, res, next) {
    var chapId = req.params.chapId
    var chaptitle = req.body.chaptitle
    var chapbio = req.body.chapbio

    ChapterDisciplineModel.updateChapterDisciplineById(chapId, {chaptitle: chaptitle, chapbio: chapbio})
        .then(function () {
            res.redirect('/admin/admin-selfdiscipline/admin-selfdiscipline-chapcont')
        })
        .catch(next)
})

router.get('/:chapId/chapremove', function (req, res, next) {
    var chapId = req.params.chapId
    ChapterDisciplineModel.delOneChapterById(chapId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

/*考试培训*/

router.get('/admin-education', function (req, res) {
    res.render('admin/admin-education/admin-education')
})

router.get('/admin-education/admin-education-exam', function (req, res) {
    res.render('admin/admin-education/admin-education-exam')
})

router.post('/admin-education/admin-education-exam', function (req, res, next) {
    var etitle = req.body.etitle;
    var ebio = req.body.ebio;
    var exameducation = {
        etitle: etitle,
        ebio: ebio,
    }
    ExamEducationModel.create(exameducation)
        .then(function (result) {
            exameducation = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-education/admin-education-examcont')
        })
        .catch(next)
})

router.get('/admin-education/admin-education-examcont', function (req, res, next) {
    ExamEducationModel.getExamEducation()
        .then(function (exam1education) {
            res.render('admin/admin-education/admin-education-examcont', {
                exam1education: exam1education
            })
        })
        .catch(next)
})

router.get('/admin-education/:eId/admin-education-examup', function (req, res, next) {
    var eId = req.params.eId
    ExamEducationModel.getOneExamEducationById(eId)
        .then(function (examoneeducation) {
            res.render('admin/admin-education/admin-education-examup', {
                examoneeducation: examoneeducation
            })
        })
        .catch(next)
})

router.post('/admin-education/:eId/examupdate', function (req, res, next) {
    var eId = req.params.eId
    var etitle = req.body.etitle
    var ebio = req.body.ebio
    ExamEducationModel.updateOneExamEducationById(eId, {
        etitle: etitle,
        ebio: ebio,
    })
        .then(function () {
            res.redirect('/admin/admin-education/admin-education-examcont')
        })
        .catch(next)
})

router.get('/:eId/examremove', function (req, res, next) {
    var eId = req.params.eId
    ExamEducationModel.delOneExamEducationById(eId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

router.get('/admin-education/admin-education-train', function (req, res) {
    res.render('admin/admin-education/admin-education-train')
})

router.post('/admin-education/admin-education-train', function (req, res, next) {
    var ttitle = req.body.ttitle;
    var tbio = req.body.tbio;
    var traineducation = {
        ttitle: ttitle,
        tbio: tbio,
    }
    TrainEducationModel.create(traineducation)
        .then(function (result) {
            traineducation = result.ops[0]
            console.log(result)
            req.flash('success', '数据上传成功')
            return res.redirect('/admin/admin-education/admin-education-traincont')
        })
        .catch(next)
})

router.get('/admin-education/admin-education-traincont', function (req, res, next) {
    TrainEducationModel.getTrainEducation()
        .then(function (train1education) {
            res.render('admin/admin-education/admin-education-traincont', {
                train1education: train1education
            })
        })
        .catch(next)
})

router.get('/admin-education/:tId/admin-education-trainup', function (req, res, next) {
    var tId = req.params.tId
    TrainEducationModel.getOneTrainEducationById(tId)
        .then(function (trainoneeducation) {
            res.render('admin/admin-education/admin-education-trainup', {
                trainoneeducation: trainoneeducation
            })
        })
        .catch(next)
})

router.post('/admin-education/:tId/trainupdate', function (req, res, next) {
    var tId = req.params.tId
    var ttitle = req.body.ttitle
    var tbio = req.body.tbio
    TrainEducationModel.updateOneTrainEducationById(tId, {
        ttitle: ttitle,
        tbio: tbio,
    })
        .then(function () {
            res.redirect('/admin/admin-education/admin-education-traincont')
        })
        .catch(next)
})

router.get('/:tId/trainremove', function (req, res, next) {
    var tId = req.params.tId
    TrainEducationModel.delOneTrainEducationById(tId)
        .then(function () {
            res.redirect('back')
        })
        .catch(next)
})

module.exports = router;