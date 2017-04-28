
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/home');
    });
    app.use('/home', require('./home'))
    app.use('/intro',require('./intro'))
    app.use('/notice',require('./notice'))
    app.use('/dynamics',require('./dynamics'))
    app.use('/law',require('./law'))
    app.use('/admin',require('./admin'))
    app.use('/education',require ('./education'))
    app.use('/self-discipline',require ('./self-discipline'))
    app.use('/members',require ('./members'))
    app.use('/focus', require('./focus'))

    app.use(function(req,res){
        if(!res.headerSent){
            res.status(404).render('home/404')
        }
    })
};