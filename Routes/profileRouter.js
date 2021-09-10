const ProfileController = require("../Controller/profileController")

const router = require("express").Router()

router.get("/", ProfileController.home)
router.get("/add", ProfileController.formAdd)
router.post("/add", ProfileController.addProfile)
router.get("/:id/edit", ProfileController.formEdit)
router.post("/:id/edit", ProfileController.edit)
router.get("/:id/delete", ProfileController.destroy)
router.get("/:id", ProfileController.seePoint)

module.exports = router