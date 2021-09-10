const BookController = require("../Controller/bookController")

const router = require("express").Router()

router.get("/", BookController.home)

module.exports = router