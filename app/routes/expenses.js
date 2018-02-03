var express = require('express');
var router = express.Router();

// Require controller modules
var expenses_controller = require('../controllers/expenseController');

// Config the routes for expenses
router.get('/', expenses_controller.index);

// GET request for creating a Expense. NOTE This must come before routes that display Expense (uses id).
router.get('/expense/create', expenses_controller.expense_create_get);

// POST request for creating Expense.
router.post('/expense/create', expenses_controller.expense_create_post);

// GET request to delete Expense.
router.get('/expense/:id/delete', expenses_controller.expense_delete_get);

// POST request to delete Expense.
router.post('/expense/:id/delete', expenses_controller.expense_delete_post);

// GET request to update Expense.
router.get('/expense/:id/update', expenses_controller.expense_update_get);

// POST request to update Expense.
router.post('/expense/:id/update', expenses_controller.expense_update_post);

// GET request for one Expense.
router.get('/expense/:id', expenses_controller.expense_detail);

// GET request for list of all Expense items.
router.get('/expenses', expenses_controller.expense_list);

module.exports = router;