/**
 * Created by Administrator on 2017/4/15.
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
                membersname: {
                    message: '用户名不合法',
                    validators: {
                        notEmpty: {
                            message: '用户名不能为空',
                        },
                        stringLength: {
                            min: 4,
                            max: 50,
                            message: '用户名长度必须在4到50之间',
                        },

                        different: {
                            field: 'password',
                            message: '用户名和密码不能相同'
                        }
                    }
                },
                memberspassword: {
                    validators: {
                        notEmpty: {
                            message: '密码不能不能为空',
                        },
                    }
                },
            }
        });
})