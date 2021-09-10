const router = require("express").Router()
const Controller = require("../Controller")
const routerBook = require("./bookRouter")
const routerBorrowing = require("./borrowingRouter")
const routerProfile = require("./profileRouter")

router.get("/", Controller.home)
router.use("/books", routerBook)
router.use("/borrowings", routerBorrowing)
router.use("/profiles", routerProfile)

module.exports = router