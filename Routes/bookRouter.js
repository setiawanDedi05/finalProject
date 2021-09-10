const BookController = require("../Controller/bookController")

const router = require("express").Router()

router.get("/", BookController.home)
router.get("/add", BookController.formAdd)
router.post("/add", BookController.addBook)
router.get("/:id/edit", BookController.formEdit)
router.post("/:id/edit", BookController.edit)
router.get("/:id/delete", BookController.destroy)

module.exports = router