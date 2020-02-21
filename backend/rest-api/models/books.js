var mongoose = require('mongoose')
    var Schema = mongoose.Schema

    var booksSchema = new Schema({
        name: {type: String, required: true},
        title: {type: String, required: true},
        date: {type: Date, default: Date.now},
    });
    var BooksModel = mongoose.model('books',booksSchema);
    module.exports = BooksModel;
