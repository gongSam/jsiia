/**
 * Created by Administrator on 2017/4/6.
 */
var ProposalDiscipline=require('../lib/mongo').ProposalDiscipline

module.exports= {
    create: function create(proposaldiscipline) {
        return ProposalDiscipline.create(proposaldiscipline).exec();
    },

    getProposalDiscipline: function getProposalDiscipline() {
        return ProposalDiscipline
            .find()
            .sort({_id: -1})
            .exec();
    },

    getSixProposalDiscipline: function getSixProposalDiscipline() {
        return ProposalDiscipline
            .find()
            .sort({_id: -1})
            .limit(6)
            .exec();
    },

    getOneProposalDisciplineById:function getOneProposalDisciplineById(discId) {
        return ProposalDiscipline
            .findOne({_id: discId})
            .exec();
    },

    delOneDiscById: function delOneDiscById(discId) {
        return ProposalDiscipline
            .remove({_id: discId})
            .exec();
    },

    updateProposalDisciplineById: function updateProposalDisciplineById(discId, data) {
        return ProposalDiscipline
            .update({_id: discId}, {$set: data})
            .exec();
    },
}