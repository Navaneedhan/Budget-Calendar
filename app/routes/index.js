var express = require('express');
var router = express.Router();

var home_controller = require('../controllers/homeController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/Home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/Salary', function(req, res, next) {
  res.render('index', { title: 'Salary' });
});
router.get('/Expense', function(req, res, next) {
  res.render('index', { title: 'Expense' });
});
router.get('/', home_controller.index);

module.exports = router;
