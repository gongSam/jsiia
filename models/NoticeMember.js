/**
 * Created by Administrator on 2017/4/24.
 */
/**
 * Created by Administrator on 2017/4/15.
 */
var NoticeMembers=require('../lib/mongo').NoticeMembers

module.exports= {
    create: function create(noticemembers) {
        return NoticeMembers.create(noticemembers).exec();
    },

    getAllNoticeMembers:function getAllNoticeMembers(){
        return NoticeMembers
            .find()
            .sort({_id: -1})
            .exec()
    },

    getOneNoticeMembersById:function getOneNoticeMembersById(notId) {
        return NoticeMembers
            .findOne({_id: notId})
            .exec();
    },


    delOneNoticeMembersById: function delOneNoticeMembersById(notId) {
        return NoticeMembers
            .remove({_id: notId})
            .exec();
    },

    updateOneNoticeMembersById: function updateOneNoticeMembersById(notId, data) {
        return NoticeMembers
            .update({_id: notId}, {$set: data})
            .exec();
    },
}