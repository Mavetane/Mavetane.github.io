const BooksModel = require('../models/books')
const { check, validationResult } = require('express-validator');


const books = (app) => {
    app.get('/books', async (req, res) => {
        try {
            var books = await BooksModel.find()
            res.send(books)
        } catch (e) {
            console.log(e)
        }
    })

    app.post('/books', async (req, res) => {

        var newBook = new BooksModel({
            name: req.body.name,
            title: req.body.title
        })
        try {
            const dbResult = await newBook.save();
            console.log(dbResult)
            res.send(201)
        } catch (e) {
            console.log(e)
        }

    })

    app.delete('/books/:id', async (req, res, ) => {
        try {
            const { id } = req.params;
            const success = await BooksModel.findByIdAndRemove({ _id: id })
            console.log(success)
            res.status(201).end();
        } catch (e) {
            console.log(e)
        }
    })

    app.put('/books/:id', async (req, res, ) => {
        try {
            BooksModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, title) {
                res.send(title);
            })
        } catch (e) {
            console.log(e)
        }
    })

}
module.exports = { books };

