
/**
 * Created by Administrator on 2017/4/15.
 */
var UpdateMembers=require('../lib/mongo').UpdateMembers

module.exports= {
    create: function create(updatemembers) {
        return UpdateMembers.create(updatemembers).exec();
    },

    getAllUpdateMembers:function getAllUpdateMembers(){
        return UpdateMembers
            .find()
            .sort({_id: -1})
            .exec()
    },

    getOneUpdateMembersById:function getOneUpdateMembersById(upId) {
        return UpdateMembers
            .findOne({_id: upId})
            .exec();
    },

    delOneUpdateMembersById: function delOneUpdateMembersById(upId) {
        return UpdateMembers
            .remove({_id: upId})
            .exec();
    },

    updateOneUpdateMembersById: function updateOneUpdateMembersById(upId, data) {
        return UpdateMembers
            .update({_id: notId}, {$set: data})
            .exec();
    },
}