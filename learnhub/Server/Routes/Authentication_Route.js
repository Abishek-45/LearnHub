const express = require("express");
const Registration_Controller = require("../Controllers/Registration_Controller");
const Login_controller = require("../Controllers/Login_Controller");

const router = express.Router();
router.post("/Register", (req, res) => {
  Registration_Controller.user_registration(req, res);
});
router.post("/Otp", (req, res) => {
  Registration_Controller.Verify_OTP(req, res);
});
router.post("/login", (req, res) => {
  Login_controller.user_login(req, res);
});
module.exports = router;
