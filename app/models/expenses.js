var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true }
});

// Virtual for expense's URL
ExpenseSchema
.virtual('url')
.get(function () {
  return '/budget/expense/' + this._id;
});

//Export model
module.exports = mongoose.model('Expense', ExpenseSchema);