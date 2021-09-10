const ProfileController = require("../Controller/profileController")

const router = require("express").Router()

router.get("/", ProfileController.home)
// router.get("/:id", ProfileController.findOne)

module.exports = router