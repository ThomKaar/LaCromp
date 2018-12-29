const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const flavorSchema = new mongoose.Schema({
  flavorName: {
  	type: Schema.Types.String,
  	required: true
  }
});

module.exports = mongoose.model('Flavor', consumedSchema);