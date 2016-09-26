/* Heroes Model - Mongoose Schema */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: {type: String, required: true},
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  city: {type: String, required: true},
  power_name:{type: String, required: true}
});

//schema is now a model
var heroModel = mongoose.model('heroes', heroSchema);
module.exports = heroModel;
