/**
 * Created by Administrator on 2017/3/18.
 */
var AssociationDynamics=require('../lib/mongo').AssociationDynamics

module.exports={
    create:function create(associationdynamics){
        return AssociationDynamics.create(associationdynamics).exec();
    },

    getAssociationDynamicsByID: function getAssociationDynamicsByID() {
        return AssociationDynamics
            .find()
            .sort({_id: -1})
            .limit(10)
            .exec();
    },

    getSixADynamicsById:function getSixADynamicsById() {
        return AssociationDynamics
            .find()
            .sort({_id:-1})
            .limit(6)
            .exec();
    },

    getOneADynamicsById:function getOneADynamicsById(dassociId) {
        return AssociationDynamics
            .findOne({_id: dassociId})
            .exec();
    },

    delOneMDynamicsById: function delOneMDynamicsById(dassociId) {
        return AssociationDynamics
            .remove({_id: dassociId})
            .exec();
    },

    updateOneMDynamicsById: function updateOneMDynamicsById(dassociId, data) {
        return AssociationDynamics
            .update({_id: dassociId}, {$set: data})
            .exec();
    },
}
