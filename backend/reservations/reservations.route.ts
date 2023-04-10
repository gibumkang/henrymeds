// bypass renaming require variable
export {}

const express = require("express")
const { setSchedule, getSchedule, createProvider } = require("./clients.controller")

// import router
const router = express.Router()

router.route("/").post(createProvider)
router.route("/schedule").get(getSchedule).post(setSchedule)

module.exports = router
