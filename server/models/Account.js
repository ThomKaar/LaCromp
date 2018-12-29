const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const accountSchema = new mongoose.Schema({
  username: {
  	type: Schema.Type.String,
  	required: true
  }
  password: {
  	type: Schema.Type.String,
  	required: true
  }
  group_ids: [{
  	type: Schema.Type.String
  	ref: 'Group'
  }]
});

module.exports = mongoose.model('Account', accountSchema);