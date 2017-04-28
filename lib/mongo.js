
/**
 * Created by Administrator on 2017/3/17.
 */
var config = require('config-lite');
var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect(config.mongodb);

exports.MemberProfessional= mongolass.model('MemberProfessional',{
    memptitle:{type:'string'},
    mempId:{type: Mongolass.Types.ObjectId},
})
exports.MemberProfessional.index({mempId:1,_id: 1}).exec();

exports.AssociationPublish= mongolass.model('AssociationPublish',{
    assocititle:{type : 'string'},
    associmonth:{type : 'string'},
    associday:{type : 'string'},
    associbio:{type : 'string'},
    associId:{type: Mongolass.Types.ObjectId},
} )
exports.AssociationPublish.index({associId:1,_id: 1}).exec();

exports.MonitorPublish= mongolass.model('MonitorPublish',{
    monititle:{type : 'string'},
    monimonth:{type : 'string'},
    moniday:{type : 'string'},
    monibio:{type : 'string'},
    moniId:{type: Mongolass.Types.ObjectId},
} )
exports.MonitorPublish.index({moniId:1,_id: 1}).exec();

exports.MonitorDynamics= mongolass.model('MonitorDynamics',{
    dmonititle:{type : 'string'},
    dmonimonth:{type : 'string'},
    dmoniday:{type : 'string'},
    dmonibio:{type : 'string'},
    dmoniId:{type: Mongolass.Types.ObjectId},
} )
exports.MonitorDynamics.index({dmoniId:1,_id: 1}).exec();

exports.AssociationDynamics= mongolass.model('AssociationDynamics',{
    dassocititle:{type : 'string'},
    dassocimonth:{type : 'string'},
    dassociday:{type : 'string'},
    dassocibio:{type : 'string'},
    dassociId:{type: Mongolass.Types.ObjectId},
} )
exports.AssociationDynamics.index({dassociId:1,_id: 1}).exec();

exports.MemberDynamics= mongolass.model('MemberDynamics',{
    memtitle:{type : 'string'},
    memmonth:{type : 'string'},
    memday:{type : 'string'},
    membio:{type : 'string'},
    memId:{type: Mongolass.Types.ObjectId},
} )
exports.MemberDynamics.index({memId:1,_id: 1}).exec();

exports.RegulationLaw= mongolass.model('RegulationLaw',{
    regtitle:{type : 'string'},
    regmonth:{type : 'string'},
    regday:{type : 'string'},
    regbio:{type : 'string'},
    regId:{type: Mongolass.Types.ObjectId},
} )
exports.RegulationLaw.index({regId:1,_id: 1}).exec();

exports.DocumentLaw= mongolass.model('DocumentLaw',{
    doctitle:{type : 'string'},
    docmonth:{type : 'string'},
    docday:{type : 'string'},
    docbio:{type : 'string'},
    docId:{type: Mongolass.Types.ObjectId},
} )
exports.DocumentLaw.index({regId:1,_id: 1}).exec();

exports.DepartmentLaw= mongolass.model('DepartmentLaw',{
    deptitle:{type : 'string'},
    depmonth:{type : 'string'},
    depday:{type : 'string'},
    depbio:{type : 'string'},
    depId:{type: Mongolass.Types.ObjectId},
})
exports.DepartmentLaw.index({regId:1,_id: 1}).exec();

exports.Focus =mongolass.model('Focus',{
    ftitle:{type:'string'},
    fmonth:{type:'string'},
    fday:{type:'string'},
    fyear:{type:'string'},
    fbio:{type:'string'},
    fId:{type: Mongolass.Types.ObjectId},
})
exports.Focus.index({ffId:1,_id:1}).exec();

exports.FileFocus =mongolass.model('FileFocus',{
    favatar:{type:'string'},
    ffId:{type: Mongolass.Types.ObjectId},
})
exports.FileFocus.index({ffId:1,_id:1}).exec();

exports.Members =mongolass.model('Members',{
    membersname:{type: 'string'},
    memberspassword:{type:'string'},
    membersId:{type: Mongolass.Types.ObjectId},
})
exports.Members.index({membersId:1,_id: 1}).exec();

exports.NoticeMembers =mongolass.model('NoticeMembers',{
    ntitle:{type:'string'},
    nmonth:{type:'string'},
    nday:{type:'string'},
    nyear:{type:'string'},
    nbio:{type:'string'},
    notId:{type: Mongolass.Types.ObjectId},
})
exports.NoticeMembers.index({notId:1,_id: 1}).exec();

exports.DuesMembers =mongolass.model('DuesMembers',{
    membersname:{type: Mongolass.Types.ObjectId},
    ddues:{type:'string'},
    duesId:{type: Mongolass.Types.ObjectId},
})
exports.DuesMembers.index({duesId:1,_id: 1}).exec();

exports.UpdateMembers =mongolass.model('UpdateMembers',{
    upcompanytitle:{type: 'string'},
    upfiletitle:{type:'string'},
    upfile:{type:'string'},
    upId:{type: Mongolass.Types.ObjectId},
})
exports.UpdateMembers.index({duesId:1,_id: 1}).exec();

exports.DownloadMembers =mongolass.model('DownloadMembers',{
    downfiletitle:{type:'string'},
    downfile:{type:'string'},
    downId:{type: Mongolass.Types.ObjectId},
})
exports.DownloadMembers.index({duesId:1,_id: 1}).exec();

exports.ProposalDiscipline = mongolass.model('ProposalDiscipline',{
    disctitle:{type:'string'},
    discbio:{type:'string'},
    discId:{type: Mongolass.Types.ObjectId},
})
exports.ProposalDiscipline.index({discId:1,_id:1}).exec();

exports.RiskDiscipline = mongolass.model('RiskDiscipline',{
    risktitle:{type:'string'},
    riskbio:{type:'string'},
    riskId:{type: Mongolass.Types.ObjectId},
})
exports.RiskDiscipline.index({riskId:1,_id:1}).exec();

exports.ChapterDiscipline = mongolass.model('ChapterDiscipline',{
    chaptitle:{type:'string'},
    chapbio:{type:'string'},
    chapId:{type: Mongolass.Types.ObjectId},
})
exports.ChapterDiscipline.index({chapterId:1,_id:1}).exec();

exports.ExamEducation= mongolass.model('ExamEducation',{
    etitle:{type:'string'},
    ebio:{type:'string'},
    eId:{type: Mongolass.Types.ObjectId},
})
exports.ExamEducation.index({eId:1,_id:1}).exec();

exports.TrainEducation= mongolass.model('TrainEducation',{
    ttitle:{type:'string'},
    tbio:{type:'string'},
    tId:{type: Mongolass.Types.ObjectId},
})
exports.TrainEducation.index({eId:1,_id:1}).exec();