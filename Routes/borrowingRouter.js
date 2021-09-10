const BorrowingController = require("../Controller/borrowingController")

const router = require("express").Router()

router.get("/", BorrowingController.home )

module.exports = router