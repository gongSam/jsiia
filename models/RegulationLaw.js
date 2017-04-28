/**
 * Created by Administrator on 2017/3/18.
 */
var RegulationLaw=require('../lib/mongo').RegulationLaw

module.exports={
    create:function create(regulationlaw){
        return RegulationLaw.create(regulationlaw).exec();
    },

    getRegulationLawByID: function getRegulationLawByID() {
        return RegulationLaw
            .find()
            .sort({_id: -1})
            .limit(10)
            .exec();
    },

    getSixRLawById:function getSixRLawById() {
        return RegulationLaw
            .find()
            .sort({_id:-1})
            .limit(6)
            .exec();
    },

    getOneRLawById:function getOneRLawById(regId) {
        return RegulationLaw
            .findOne({_id: regId})
            .exec();
    },

    delOneRLawById: function delOneRLawById(regId) {
        return RegulationLaw
            .remove({_id: regId})
            .exec();
    },

    updateOneRLawById: function updateOneRLawById(regId, data) {
        return RegulationLaw
            .update({_id: regId}, {$set: data})
            .exec();
    },
}

