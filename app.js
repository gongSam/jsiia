var express = require('express');
var path = require('path');
var config = require('config-lite');
var flash = require('connect-flash');
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var routes = require('./routes');
var pkg = require('./package');
var ejs = require("ejs");
var bodyParser = require('body-parser');
var ueditor = require("ueditor")
var favicon = require('serve-favicon')
var multer = require('multer')

var app = express();

app.use(multer({dest: "./public/uploadfiles"}))
//上传50mb
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// 设置模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为 ejs
app.set('view engine', 'ejs');
//设置logo
app.use(favicon(path.join(__dirname, 'public/images/favicon', 'JSIIAlogo.png')));

//设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')))

// session 中间件
app.use(session({
    name: config.session.key,// 设置 cookie 中保存 session id 的字段名称
    secret: config.session.secret,// 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    cookie: {
        maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
    },
    store: new MongoStore({// 将 session 存储到 mongodb
        url: config.mongodb// mongodb 地址
    })
}));

// 上传文件目录


/*app.use(require('express-formidable')({
 uploadDir: path.join(__dirname, 'public/images/uploads'),
 keepExtensions: true// 保留后缀
 }));*/


app.use("/javascripts/ueditor/ue", ueditor(path.join(__dirname, 'public'), function (req, res, next) {
    var imgDir = '/public/uploads/images/' //默认上传地址为图片
    var ActionType = req.query.action;
    if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
        var file_url = imgDir;//默认上传地址为图片
        /*其他上传格式的地址*/
        if (ActionType === 'uploadfile') {
            file_url = '/public/uploads/files/'; //附件保存地址
        }
        if (ActionType === 'uploadvideo') {
            file_url = '/public/uploads/video/'; //视频保存地址
        }
        res.ue_up(file_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
        res.setHeader('Content-Type', 'text/html');
    }
    //客户端发起图片列表请求
    else if (ActionType === 'listimage') {

        res.ue_list(imgDir);  // 客户端会列出 dir_url 目录下的所有图片
    }
    // 客户端发起其它请求
    else {
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/javascripts/ueditor/ueditor.config.json')
    }
}));

// flash 中间价，用来显示通知
app.use(flash());

app.locals.blog = {
    title: pkg.name,
    description: pkg.description
};

// 添加模板必需的三个变量
app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
});

// 路由
routes(app);

app.listen(config.port, function () {
 console.log(`${pkg.name} listening on port ${config.port}`);
 })

/*app.listen(8080, '192.168.1.110', function () {

})*/

/*
 app.listen(8080,'192.168.199.244', function () {

 })
 */
