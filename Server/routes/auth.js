const express = require("express");
const router = express.Router();
const { registerWithOtp, finalRegister, resendOtp, loginUser } = require("../controllers/authController");

router.post("/register-otp", registerWithOtp);
router.post("/register", finalRegister);
router.post("/resend-otp", resendOtp);
router.post("/login", loginUser);

module.exports = router;