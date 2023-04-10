// bypass renaming require variable
export {}

const express = require("express")
const { setSchedule, getProviders, createProvider } = require("./providers.controller")

// import router
const router = express.Router()

router.route("/").post(createProvider)
router.route("/schedule").get(getProviders)
router.route("/schedule/:id").put(setSchedule)

module.exports = router
