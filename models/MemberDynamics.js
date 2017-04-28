var MemberDynamics=require('../lib/mongo').MemberDynamics

module.exports={
    create:function create(memberdynamics){
        return MemberDynamics.create(memberdynamics).exec();
    },

    getMemberDynamicsByID: function getMemberDynamicsByID() {
        return MemberDynamics
            .find()
            .sort({_id: -1})
            .limit(10)
            .exec();
    },

    getSixMDynamicsById:function getSixMDynamicsById() {
        return MemberDynamics
            .find()
            .sort({_id:-1})
            .limit(6)
            .exec();
    },

    getOneMDynamicsById:function getOneMDynamicsById(memId) {
        return MemberDynamics
            .findOne({_id: memId})
            .exec();
    },

    delOneMDynamicsById: function delOneMDynamicsById(memId) {
        return MemberDynamics
            .remove({_id: memId})
            .exec();
    },

    updateOneMDynamicsById: function updateOneMDynamicsById(memId, data) {
        return MemberDynamics
            .update({_id: memId}, {$set: data})
            .exec();
    },


}