const BorrowingController = require("../Controller/borrowingController")

const router = require("express").Router()

router.get("/", BorrowingController.home )
router.get("/add", BorrowingController.formBorrow )
router.post("/add", BorrowingController.borrow )
router.get("/late", BorrowingController.lateBorrow )
router.get("/returned", BorrowingController.returnedBorrow )
router.get("/:id", BorrowingController.updateStatus )
router.get("/:id/returned", BorrowingController.updateStatus )

module.exports = router