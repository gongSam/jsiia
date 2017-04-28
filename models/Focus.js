/**
 * Created by Administrator on 2017/4/18.
 */
/**
 * Created by Administrator on 2017/3/18.
 */
var Focus =require('../lib/mongo').Focus

module.exports={
    create:function create(focus){
        return Focus.create(focus).exec();
    },

    getFocus: function getFocus() {
        return Focus
            .find()
            .sort({_id: -1})
            .limit(10)
            .exec();
    },

    getOneFocusById:function getOneFoucsById(fId) {
        return Focus
            .findOne({_id: fId})
            .exec();
    },

    delOneFocusById: function delOneFocusById(fId) {
        return Focus
            .remove({_id: fId})
            .exec();
    },

    updateOneFocusById: function updateOneFocusById(fId, data) {
        return Focus
            .update({_id: fId}, {$set: data})
            .exec();
    },
}

