const {Borrowing, Profile, Book} = require("../models/")
class BorrowingController{
    static home(req, res) {
        Borrowing.findAll({
            include : [Profile, Book]
        })
            .then(borrowings => {
                res.render('Borrowing', {borrowings})
            })
            .catch(err => {
                console.log(err.stack)
                res.send(err)
            })
    }

    static formBorrow(req, res){
        let profile = Profile.findAll()
        let book = Book.findAll()
        Promise.all([profile,book])
            .then(([profiles, books]) => {
                res.render('borrow', {profiles, books})
            })
            .catch(err => res.send(err))
    }

    static borrow(req, res){
        let data = req.body
        data.status = false
        Borrowing.create(data)
            .then(()=>{
                res.redirect("/borrowings")
            })
            .catch(err => {
                res.send(req.body)
                console.log(err.stack)
                // res.send(err)
            })
    }
}

module.exports = BorrowingController