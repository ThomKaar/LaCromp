const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const mealSchema = new mongoose.Schema({
  mealName: Schema.Types.String,
  date: {
  	type: Schema.Types.Date,
  	required: true
  }
});

module.exports = mongoose.model('Meal', mealSchema);