/**
 * Created by Administrator on 2017/4/25.
 */
/**
 * Created by Administrator on 2017/4/16.
 */
$(function (){
    $('#defaultform')
        .bootstrapValidator({
            message: '这是一个非法的值',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                upcompanytitle: {
                    message: '用户名不合法',
                    validators: {
                        notEmpty: {
                            message: '公司名不能为空',
                        },
                        stringLength: {
                            min: 4,
                            max: 50,
                            message: '公司名长度必须在4到30之间',
                        },

                    }
                },
                upfiletitle: {
                    validators: {
                        notEmpty: {
                            message: '文件名不能为空',
                        },
                    }
                },

                upfile: {
                    validators: {
                        notEmpty: {
                            message: '文件不能为空',
                        },
                    }
                },
            }
        });
})