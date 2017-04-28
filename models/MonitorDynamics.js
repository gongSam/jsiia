/**
 * Created by Administrator on 2017/3/18.
 */

var MonitorDynamics=require('../lib/mongo').MonitorDynamics

module.exports={
    create:function create(monitordynamics){
        return MonitorDynamics.create(monitordynamics).exec();
    },

    getMonitorDynamicsByID: function getMonitorDynamicsByID() {
        return MonitorDynamics
            .find()
            .sort({_id: -1})
            .limit(10)
            .exec();
    },
    toPaging:function(skip,limit){
        return MonitorDynamics
            .find({},{limit:limit,skip:skip})
            .exec();
    },

    getSixMDynamicsById:function getSixMDynamicsById() {
        return MonitorDynamics
            .find()
            .sort({_id:-1})
            .limit(6)
            .exec();
    },

    getOneMDynamicsById:function getOneMDynamicsById(dmoniId) {
        return MonitorDynamics
            .findOne({_id: dmoniId})
            .exec();
    },

    delOneMDynamicsById: function delOneMDynamicsById(dmoniId) {
        return MonitorDynamics
            .remove({_id: dmoniId})
            .exec();
    },

    updateOneMDynamicsById: function updateOneMDynamicsById(dmoniId, data) {
        return MonitorDynamics
            .update({_id: dmoniId}, {$set: data})
            .exec();
    },
}