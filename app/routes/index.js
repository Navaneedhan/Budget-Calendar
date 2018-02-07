var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/Salary', function(req, res, next) {
  res.render('index', { title: 'Salary' });
});
router.get('/Expense', function(req, res, next) {
  res.render('index', { title: 'Expense' });
});

module.exports = router;
