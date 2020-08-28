var mongoose = require('mongoose')
var Schema = mongoose.Schema

var usersSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },

});

var UsersModel = mongoose.model('users', usersSchema);
module.exports = UsersModel;

