const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const groupSchema = new mongoose.Schema({
  accountIds: [{
  	type: Schema.Types.ObjectId,
  	ref: 'Account',
  	required: true
  }]
});

module.exports = mongoose.model('Consumed', consumedSchema);