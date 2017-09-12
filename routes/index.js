var express = require('express');
var router = express.Router();
var db = require('../collections');
var assert = require('assert')

/* GET home page. */
router.get('/', function(req, res, next) {
    db.sign.find({},function(err,data){
      assert.equal(err,null);
      console.log(data);
      res.render('index', { title: 'TodoList', data: data});
    });
});

module.exports = router;
