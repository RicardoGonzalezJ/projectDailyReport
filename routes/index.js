var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index'); 
});
router.get('/createreport', function(req, res){
  res.render('createreport');
})

module.exports = router;