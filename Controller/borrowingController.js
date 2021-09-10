const {Borrowing, Profile, Book} = require("../models/")
class BorrowingController{
    static home(req, res) {
        Borrowing.findAll({
            include : [Profile, Book]
        })
            .then(borrowings => {
                res.render('Borrowing', {borrowings})
            })
            .catch(err => res.send(err))
    }
}

module.exports = BorrowingController