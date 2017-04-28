/**
 * Created by Administrator on 2017/4/6.
 */
var MemberPrefessional=require('../lib/mongo').MemberProfessional

module.exports= {
    create: function create(memberprofessional) {
        return MemberPrefessional.create(memberprofessional).exec();
    },

    getMemberProfessionalByID: function getMemberProfessionalByID() {
        return MemberPrefessional
            .find()
            .sort({_id: -1})
            .exec();
    },

    getOneMProfessionalById:function getOneMProfessionalById(mempId) {
        return MemberPrefessional
            .findOne({_id: mempId})
            .exec();
    },

    delOneMemberPrefessionalById: function delOneMemberPrefessionalById(mempId) {
        return MemberPrefessional
            .remove({_id: mempId})
            .exec();
    },

    updateMemberPrefessionalById: function updateMemberPrefessionalById(mempId, data) {
        return MemberPrefessional
            .update({_id: mempId}, {$set: data})
            .exec();
    },
}