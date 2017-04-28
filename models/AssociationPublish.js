/**
 * Created by Administrator on 2017/3/18.
 */
var AssociationPublish=require('../lib/mongo').AssociationPublish

module.exports={
    create:function create(associationpublish){
        return AssociationPublish.create(associationpublish).exec();
    },

    getAssociationPublicByID: function getAssociationPublicByID() {
        return AssociationPublish
            .find()
            .sort({_id: -1})
            .limit(10)
            .exec();
    },

    getSixAPublishById:function getSixAPublishById() {
        return AssociationPublish
            .find()
            .sort({_id:-1})
            .limit(6)
            .exec();
    },

    getOnePublishById:function getOnePublishById(associId) {
        return AssociationPublish
            .findOne({_id: associId})
            .exec();
    },

    delOnePublishById: function delOnePublishById(associId) {
        return AssociationPublish
            .remove({_id: associId})
            .exec();
    },

    updateMOnePublishById: function updateMOnePublishById(associId, data) {
        return AssociationPublish
            .update({_id: associId}, {$set: data})
            .exec();
    },
}