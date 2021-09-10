const BorrowingController = require("../Controller/borrowingController")

const router = require("express").Router()

router.get("/", BorrowingController.home )
router.get("/add", BorrowingController.formBorrow )
router.post("/add", BorrowingController.borrow )

module.exports = router