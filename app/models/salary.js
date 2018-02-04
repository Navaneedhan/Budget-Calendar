var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SalarySchema = new Schema({
  amount: { type: Number, required: true }
});

// Virtual for salary's URL
SalarySchema
.virtual('url')
.get(function () {
  return '/budget_app/salary/' + this._id;
});

//Export model
module.exports = mongoose.model('salary', SalarySchema);