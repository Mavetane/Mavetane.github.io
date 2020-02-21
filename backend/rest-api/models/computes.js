var mongoose = require('mongoose');

  var computerSchema = mongoose.Schema({
    name:  {type : String , required : true}, // String is shorthand for {type: String}
    date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('computer',computerSchema);