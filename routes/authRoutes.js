const express = require("express")
const router = express.Router()

const {
  login,
  signUp,
  sendOTP,
} = require("../controllers/authController")


router.post("/login", login)
router.post("/signup", signUp)
router.post("/sendotp", sendOTP)

module.exports = router;