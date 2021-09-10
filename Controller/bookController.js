const {Book} = require("../models/")
class BookController{
    static home(req, res) {
        Book.findAll()
            .then(books => {
                res.render('books', {books})
            })
            .catch(err => res.send(err))
    }

    static formAdd(req, res) {
        res.render('formBook', {
            book: {
                title: '',
                author: '',
                released_year: '',
                coutry: '',
                language: '',
                link: '',
                pages:''
        }})
    }

    static addBook(req, res) {
        let data = req.body
        Book.create(data)
            .then(() => {
                res.redirect('/books')
            })
            .catch(err => res.send(err))
    }

    static formEdit(req, res) {
        Book.findByPk(req.params.id)
            .then(book => {
                res.render('formBook', {book})
            })
            .catch(err => res.send(err))
    }

    static edit(req, res) {
        Book.update(req.body, {
            where: {
                id : +req.params.id
            }
        })
            .then(() => {
                res.redirect("/books")
            })
            .catch(err => res.send(err))
    }

    static destroy(req, res) {
        Book.destroy({
            where: {
                id:+req.params.id
            }
        })
            .then(books => {
                res.redirect('/books')
            })
            .catch(err => res.send(err))
    }
}

module.exports = BookController