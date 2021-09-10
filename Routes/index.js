const router = require("express").Router()
const Controller = require("../Controller")
const routerBook = require("./bookRouter")
const routerBorrowing = require("./borrowingRouter")
const routerProfile = require("./profileRouter")
const session = require('express-session');

router.use(session({
    secret: "Loged",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000
    }
}))

const authentication = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/login?err=' + 'kamu harus login terlebih dahulu')
    }
}

const logged = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/')
    } else {
        next()
    }
}

router.get("/", authentication, Controller.home)
router.get("/login", logged,  Controller.login)
router.post("/login",authentication, Controller.proccessLogin)
router.get("/register",authentication, Controller.formRegister)
router.post("/register",authentication, Controller.register)
router.get('/logout', authentication, Controller.logout)
router.use("/books", authentication, routerBook)
router.use("/borrowings" ,authentication, routerBorrowing)
router.use("/profiles", authentication, routerProfile)

module.exports = router