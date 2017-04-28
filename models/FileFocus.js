/**
 * Created by Administrator on 2017/4/19.
 */
/**
 * Created by Administrator on 2017/4/18.
 */
/**
 * Created by Administrator on 2017/3/18.
 */
var FileFocus =require('../lib/mongo').FileFocus

module.exports={
    create:function create(filefocus){
        return FileFocus.create(filefocus).exec();
    },

    getFileFocus: function getFileFocus() {
        return FileFocus
            .find()
            .sort({_id: -1})
            .limit(10)
            .exec();
    },

    getOneFileFocusById:function getOneFoucsById(ffId) {
        return FileFocus
            .findOne({_id: ffId})
            .exec();
    },

    delOneFileFocusById: function delOneFileFocusById(ffId) {
        return FileFocus
            .remove({_id: ffId})
            .exec();
    },

    updateOneFileFocusById: function updateOneFileFocusById(ffId, data) {
        return FileFocus
            .update({_id: ffId}, {$set: data})
            .exec();
    },
}

