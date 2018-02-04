var Salary = require('../models/salary');

exports.index = function(req, res) {
  // Salary.find({}, 'amount').exec(function(err, list) {
  //   if(err) {
  //     return next(err);
  //   }
  //   console.log(list);
  // });
  res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all salarys.
exports.salary_list = function(req, res) {
    res.send('NOT IMPLEMENTED: salary list');
};

// Display detail page for a specific salary.
exports.salary_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: salary detail: ' + req.params.id);
};

// Display salary create form on GET.
exports.salary_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: salary create GET');
};

// Handle salary create on POST.
exports.salary_create_post = function(req, res) {
    // Salary.create({ amount: req.params.amount }, function(err, salary_details) {
    //   if(err) {
    //     return next(err);
    //   }
    // });
    res.send('NOT IMPLEMENTED: salary create POST');
};

// Display salary delete form on GET.
exports.salary_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: salary delete GET');
};

// Handle salary delete on POST.
exports.salary_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: salary delete POST');
};

// Display salary update form on GET.
exports.salary_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: salary update GET');
};

// Handle salary update on POST.
exports.salary_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: salary update POST');
};