
/**
 * Created by Administrator on 2017/4/15.
 */
var DuesMembers=require('../lib/mongo').DuesMembers

module.exports= {
    create: function create(duesmembers) {
        return DuesMembers.create(duesmembers).exec();
    },

    getAllDuesMembers:function getAllDuesMembers(){
        return DuesMembers
            .find()
            .sort({_id: -1})
            .exec()
    },

    getOneDuesMembersById:function getOneDuesMembersById(duesId) {
        return DuesMembers
            .findOne({_id: duesId})
            .exec();
    },

    getOneDuesMembersByname: function getOneDuesMembersByname(membersname) {
        var query= {};
        if (membersname){
            query.membersname = membersname;
        }
        return DuesMembers
            .find(query)
            .populate({ path: 'membersname', model: 'Members' })
            .sort({ _id: -1 })
            .exec();
    },

    delOneDuesMembersById: function delOneDuesMembersById(duesId) {
        return DuesMembers
            .remove({_id: duesId})
            .exec();
    },

    updateOneDuesMembersById: function updateOneDuesMembersById(duesId, data) {
        return DuesMembers
            .update({_id: duesId}, {$set: data})
            .exec();
    },
}