const router = require("express").Router()
const Controller = require("../Controller")
const routerBook = require("./bookRouter")
const routerBorrowing = require("./borrowingRouter")
const routerProfile = require("./profileRouter")
const authentication = require('../middlewares/auth')
const session = require('express-session')

router.use(session({
    secret: "sesuatuyangadadihatimu",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

router.get("/", authentication, Controller.home)
router.get("/login", (req, res, next) => {
    if(req.session.user){
        res.redirect('/')
    } else {
        next()
    }
}, Controller.loginForm)
router.post("/login", Controller.login)

router.get("/logout", Controller.logout)

router.get("/register", Controller.registerForm)
router.post("/register", Controller.register)

router.use("/books", routerBook)
router.use("/borrowings", routerBorrowing)
router.use("/profiles", routerProfile)

module.exports = router