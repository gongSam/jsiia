
/**
 * Created by Administrator on 2017/4/15.
 */
var DownloadMembers=require('../lib/mongo').DownloadMembers

module.exports= {
    create: function create(downloadmembers) {
        return DownloadMembers.create(downloadmembers).exec();
    },

    getAllDownloadMembers:function getAllDownloadMembers(){
        return DownloadMembers
            .find()
            .sort({_id: -1})
            .exec()
    },

    getOneDownloadMembersById:function getOneDownloadMembersById(downId) {
        return DownloadMembers
            .findOne({_id: downId})
            .exec();
    },

    delOneDownloadMembersById: function delOneDownloadMembersById(downId) {
        return DownloadMembers
            .remove({_id: downId})
            .exec();
    },

    updateOneDownloadMembersById: function downdateOneDownloadMembersById(downId, data) {
        return DownloadMembers
            .update({_id: notId}, {$set: data})
            .exec();
    },
}