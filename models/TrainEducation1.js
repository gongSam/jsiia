
var TrainEducation =require('../lib/mongo').TrainEducation

module.exports={
    create:function create(trainducation){
        return TrainEducation.create(trainducation).exec();
    },

    getTrainEducation: function getTrainEducation() {
        return TrainEducation
            .find()
            .sort({_id: -1})
            .exec();
    },

    getEightTrainEducation: function getEightTrainEducation() {
        return TrainEducation
            .find()
            .sort({_id: -1})
            .limit(8)
            .exec();
    },

    getOneTrainEducationById:function getOneTrainEducationById(tId) {
        return TrainEducation
            .findOne({_id: tId})
            .exec();
    },

    delOneTrainEducationById: function delOneTrainEducationById(tId) {
        return TrainEducation
            .remove({_id: tId})
            .exec();
    },

    updateOneTrainEducationById: function updateOneTrainEducationById(tId, data) {
        return TrainEducation
            .update({_id: tId}, {$set: data})
            .exec();
    },
}

