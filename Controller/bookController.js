const {Book} = require("../models/")
class BookController{
    static home(req, res) {
        Book.findAll()
            .then(books => {
                res.render('books', {books})
            })
            .catch(err => res.send(err))
    }
}

module.exports = BookController