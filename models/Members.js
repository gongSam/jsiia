/**
 * Created by Administrator on 2017/4/15.
 */
var Members=require('../lib/mongo').Members

module.exports= {
    create: function create(members) {
        return Members.create(members).exec();
    },

    getMemberByName: function getMemberByName(membersname) {
        return Members
            .findOne({membersname: membersname})
            .exec();
    },

    getAllMembers:function getAllMembers(){
        return Members
            .find()
            .sort({_id: -1})
            .exec()
    },

    getOneMembersById:function getOneMembersById(membersId) {
        return Members
            .findOne({_id: membersId})
            .exec();
    },

    getAllMembersByID: function getAllMembersByID() {
        return Members
            .find()
            .sort({_id: -1})
            .exec();
    },

    delOneMembersById: function delOneMembersById(membersId) {
        return Members
            .remove({_id: membersId})
            .exec();
    },

    updateOneMembersById: function updateOneMembersById(membersId, data) {
        return Members
            .update({_id: membersId}, {$set: data})
            .exec();
    },
}