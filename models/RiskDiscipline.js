/**
 * Created by Administrator on 2017/4/6.
 */
var RiskDiscipline=require('../lib/mongo').RiskDiscipline

module.exports= {
    create: function create(riskdiscipline) {
        return RiskDiscipline.create(riskdiscipline).exec();
    },

    getRiskDiscipline: function getRiskDiscipline() {
        return RiskDiscipline
            .find()
            .sort({_id: -1})
            .exec();
    },
    toPaging:function(){
        return RiskDiscipline
            .find()
            .sort({_id: -1})
            .exec();
    },
    getTotalPages: function(){
        return RiskDiscipline.find().exec();
    },
    getSixRiskDiscipline: function getSixRiskDiscipline() {
        return RiskDiscipline
            .find()
            .sort({_id: -1})
            .limit(6)
            .exec();
    },

    getOneRiskDisciplineById:function getOneRiskDisciplineById(riskId) {
        return RiskDiscipline
            .findOne({_id: riskId})
            .exec();
    },

    delOneRiskById: function delOneRiskById(riskId) {
        return RiskDiscipline
            .remove({_id: riskId})
            .exec();
    },

    updateRiskDisciplineById: function updateRiskDisciplineById(riskId, data) {
        return RiskDiscipline
            .update({_id: riskId}, {$set: data})
            .exec();
    },
}