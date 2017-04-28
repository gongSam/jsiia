/**
 * Created by Administrator on 2017/3/18.
 */
var DocumentLaw=require('../lib/mongo').DocumentLaw

module.exports={
    create:function create(documentlaw){
        return DocumentLaw.create(documentlaw).exec();
    },

    getDocumentLawByID: function getDocumentLawByID() {
        return DocumentLaw
            .find()
            .sort({_id: -1})
            .limit(10)
            .exec();
    },

    getSixDLawById:function getSixDLawById() {
        return DocumentLaw
            .find()
            .sort({_id:-1})
            .limit(6)
            .exec();
    },

    getOneDLawById:function getOneDLawById(docId) {
        return DocumentLaw
            .findOne({_id: docId})
            .exec();
    },

    delOneDLawById: function delOneDLawById(docId) {
        return DocumentLaw
            .remove({_id: docId})
            .exec();
    },

    updateOneDLawById: function updateOneDLawById(docId, data) {
        return DocumentLaw
            .update({_id: docId}, {$set: data})
            .exec();
    },
}

