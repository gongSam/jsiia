/**
 * Created by Administrator on 2017/2/20.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('mainindex');
});

module.exports = router;