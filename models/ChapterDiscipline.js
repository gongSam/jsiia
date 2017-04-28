
/**
 * Created by Administrator on 2017/4/22.
 */
/**
 * Created by Administrator on 2017/4/6.
 */
var ChapterDiscipline=require('../lib/mongo').ChapterDiscipline

module.exports= {
    create: function create(chapterdiscipline) {
        return ChapterDiscipline.create(chapterdiscipline).exec();
    },

    getChapterDiscipline: function getChapterDiscipline() {
        return ChapterDiscipline
            .find()
            .sort({_id: -1})
            .exec();
    },

    getSixChapterDiscipline: function getSixChapterDiscipline() {
        return ChapterDiscipline
            .find()
            .sort({_id: -1})
            .limit(6)
            .exec();
    },

    getOneChapterDisciplineById:function getOneChapterDisciplineById(chapId) {
        return ChapterDiscipline
            .findOne({_id: chapId})
            .exec();
    },

    delOneChapterById: function delOneChapterById(chapId) {
        return ChapterDiscipline
            .remove({_id: chapId})
            .exec();
    },

    updateChapterDisciplineById: function updateChapterDisciplineById(chapId, data) {
        return ChapterDiscipline
            .update({_id: chapId}, {$set: data})
            .exec();
    },
}