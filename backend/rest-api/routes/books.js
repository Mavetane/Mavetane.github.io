const BooksModel = require('../models/books')


const books = (app) => {


    app.get('/bookss', async (req, res) => {
        try {
            const paginatedBooks = await BooksModel.find().skip(Number(req.query.skip))
                .limit(Number(req.query.limit))
            var books = paginatedBooks
            console.log("Length", paginatedBooks[paginatedBooks.length -1])
           
            const results = books.map(book => {
                return {
                    id: book._id,
                    name: book.name,
                    title: book.title,
                    date: book.date
                }
            })
            res.status(201).json(results)
        } catch (e) {
            
            console.log(e)
        }
    })


    app.post('/books', async (req, res) => {
        const compareBooks = await BooksModel.find()
        for (var i in compareBooks) {
            if (req.body.title.toUpperCase().trim() == compareBooks[i].title.toUpperCase().trim()) {
                return res.status(400).json("Book already exist")
            }
            console.log("I'm I", compareBooks[i].name)
        }
        if (req.body.title == "" && req.body.name == "") {
            return res.status(400).json("Both fields are required")
        }
        if (req.body.name == "") {
            return res.status(400).json("Name field is required")
        }
        if (req.body.title == "") {
            return res.status(400).json("Title field is required")
        }

        var newBook = new BooksModel({
            name: req.body.name,
            title: req.body.title
        })
        try {
            const dbResult = await newBook.save();

            const sanitizedBooks = {
                id: dbResult.id,
                name: dbResult.name,
                title: dbResult.title,
                date: dbResult.date
            }
            res.send(sanitizedBooks)
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


    
    //         const page = parseInt(req.query.page)
    //         const limit = parseInt(req.query.limit)

    //         const startIndex = (page - 1) * limit
    //         const endIndex = page * limit

    //         const results = {}

    //         if (endIndex < model.length) {
    //             results.next = {
    //                 page: page + 1,
    //                 limit: limit
    //             }
    //         }

    //         if (startIndex > 0) {
    //             results.previous = {
    //                 page: page - 1,
    //                 limit: limit
    //             }
    //         }
    //         try {
    //             results.results = await model.find().limit(limit).skip(startIndex).exec()
    //             next()
    //             res.paginatedResults = results
    //         } catch (e) {
    //             res.status(500).json({ message: e.message })
    //         }


}
module.exports = { books };

