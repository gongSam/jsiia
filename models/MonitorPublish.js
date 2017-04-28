/**
 * Created by Administrator on 2017/3/24.
 */
/**
 * Created by Administrator on 2017/3/18.
 */
var MonitorPublish=require('../lib/mongo').MonitorPublish

module.exports={
    create:function create(monitorpublish){
        return MonitorPublish.create(monitorpublish).exec();
    },

    getMonitorPublishByID: function getMonitorPublishByID() {
        return MonitorPublish
            .find()
            .sort({_id: -1})
            .limit(10)
            .exec();
    },

    getSixMPublishById:function getSixMPublishById() {
        return MonitorPublish
            .find()
            .sort({_id:-1})
            .limit(6)
            .exec();
    },

    getOneMPublishById:function getOneMPublishById(moniId) {
        return MonitorPublish
            .findOne({_id: moniId})
            .exec();
    },

    delOnePublishById: function delOnePublishById(moniId) {
        return MonitorPublish
            .remove({_id: moniId})
            .exec();
    },

    updateOnePublishById: function updateOnePublishById(moniId, data) {
        return MonitorPublish
            .update({_id: moniId}, {$set: data})
            .exec();
    },


}