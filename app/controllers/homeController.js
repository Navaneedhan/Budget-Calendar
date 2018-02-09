var Salary = require('../models/salary');
var Expense = require('../models/expenses');

exports.index = function(req, res) {
  var salary_list = 0;
  var expense_list = 0;
  Salary.find({}, 'amount').exec(function(err, list) {
    if(err) {
      return next(err);
    }
    list.forEach(function(element) {
      salary_list += element.amount;
    });
    Expense.find({}, 'amount').exec(function(err, list) {
      if(err) {
        return next(err);
      }
      list.forEach(function(element) {
        expense_list += element.amount;
      });
      res.render('index', {title: 'Current Month Budget', salary: salary_list, expense: expense_list, savings: salary_list - expense_list});
    });
  });
};
