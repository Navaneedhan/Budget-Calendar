var express = require('express');
var router = express.Router();

// Require controller modules
var salary_controller = require('../controllers/salaryController');

// Config the routes for Salary
router.get('/', salary_controller.index);

// GET request for creating a Salary. NOTE This must come before routes that display Salary (uses id).
router.get('/salary/create', salary_controller.salary_create_get);

// POST request for creating Salary.
router.post('/salary/create', salary_controller.salary_create_post);

// GET request to delete Salary.
router.get('/salary/:id/delete', salary_controller.salary_delete_get);

// POST request to delete Salary.
router.post('/salary/:id/delete', salary_controller.salary_delete_post);

// GET request to update Salary.
router.get('/salary/:id/update', salary_controller.salary_update_get);

// POST request to update Salary.
router.post('/salary/:id/update', salary_controller.salary_update_post);

// GET request for one Salary.
router.get('/salary/:id', salary_controller.salary_detail);

// GET request for list of all Salary items.
router.get('/salary_list', salary_controller.salary_list);

module.exports = router;