var express = require('express');
var router = express.Router();
var db = require('../collections');
var assert = require('assert')

/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('index', { title: '凯龙驾校'});
});

module.exports = router;
