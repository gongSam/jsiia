
var ExamEducation =require('../lib/mongo').ExamEducation

module.exports={
    create:function create(exameducation){
        return ExamEducation.create(exameducation).exec();
    },

    getExamEducation: function getExamEducation() {
        return ExamEducation
            .find()
            .sort({_id: -1})
            .exec();
    },

    getEightExamEducation: function getEightExamEducation() {
        return ExamEducation
            .find()
            .sort({_id: -1})
            .limit(8)
            .exec();
    },

    getOneExamEducationById:function getOneExamEducationById(eId) {
        return ExamEducation
            .findOne({_id: eId})
            .exec();
    },

    delOneExamEducationById: function delOneExamEducationById(eId) {
        return ExamEducation
            .remove({_id: eId})
            .exec();
    },

    updateOneExamEducationById: function updateOneExamEducationById(eId, data) {
        return ExamEducation
            .update({_id: eId}, {$set: data})
            .exec();
    },
}

