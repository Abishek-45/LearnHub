const express = require("express");
const Registration_Controller = require("../Controllers/Registration_Controller");

const router = express.Router();
router.post("/Register", (req, res) => {
  Registration_Controller.user_registration(req, res);
});
router.post("/Otp", (req, res) => {
  Registration_Controller.Verify_OTP(req, res);
});

module.exports = router;
