/**
 * Created by Administrator on 2017/3/18.
 */
var DepartmentLaw=require('../lib/mongo').DepartmentLaw

module.exports={
    create:function create(departmentlaw){
        return DepartmentLaw.create(departmentlaw).exec();
    },

    getDepartmentLawByID: function getDepartmentLawByID() {
        return DepartmentLaw
            .find()
            .sort({_id: -1})
            .limit(10)
            .exec();
    },

    getSixDLawById:function getSixDLawById() {
        return DepartmentLaw
            .find()
            .sort({_id:-1})
            .limit(6)
            .exec();
    },

    getOneDLawById:function getOneDLawById(depId) {
        return DepartmentLaw
            .findOne({_id: depId})
            .exec();
    },

    delOneRLawById: function delOneRLawById(depId) {
        return DepartmentLaw
            .remove({_id: depId})
            .exec();
    },

    updateOneRLawById: function updateOneRLawById(depId, data) {
        return DepartmentLaw
            .update({_id: depId}, {$set: data})
            .exec();
    },
}
