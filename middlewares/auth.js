const session = require('express-session')

module.exports = function Authentication(req, res, next) {
    if(req.session.user){
        next() 
    } else {
        res.redirect('/login?err=' + 'kamu harus login terlebih dahulu')
    }
}