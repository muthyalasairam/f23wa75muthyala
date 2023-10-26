var express = require('express');
var router = express.Router();
var x ,y;


/* GET users listing. */
router.get('/', function(req, res, next) {
  x = Math.random();
  y= Math.cos(x);
  res.send('Cos function of '+x+ ' is '+y );
});

module.exports = router;
