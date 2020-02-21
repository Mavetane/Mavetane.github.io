var mongoose = require('mongoose')
    var Schema = mongoose.Schema

var usersSchema = new Schema({
    name: {type: String, required: true},
    date: {type: Date, default: Date.now},
});

var UsersModel = mongoose.model('users',usersSchema);
module.exports = UsersModel;