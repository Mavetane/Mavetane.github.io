const BooksSchema = require("../models/books")

const searchBar = (app) => {
    app.get('/books', async (req, res) => {
        try {
            const searchTitle = new RegExp(escape(req.query.findTitle), 'gi');
            const searchAurthor = new RegExp(escape(req.query.findAurthor), 'gi');
            const merged = await BooksSchema.find({ name: searchTitle, author: searchAurthor })
            return res.status(201).json(merged)
        } catch (e) {
            console.log(e)
            return res.status(500)
        }

    })
    
}
module.exports = { searchBar }