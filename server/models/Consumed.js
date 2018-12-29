const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const consumedSchema = new mongoose.Schema({
  accountId: {
  	type: Schema.Types.ObjectId,
  	ref: 'Account',
  	required: true
  },
  quantity: {
  	type: Schema.Types.Number,
  	required: true
  },
  flavorId: {
  	type: Schema.Types.ObjectId,
  	ref: 'Flavor'
  },
  mealId: {
  	type: Schema.Types.ObjectId,
  	ref: 'Meal'
  }
});

module.exports = mongoose.model('Consumed', consumedSchema);