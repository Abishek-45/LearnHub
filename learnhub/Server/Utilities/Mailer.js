const mail = require("nodemailer");
require("dotenv").config();

var transport = mail.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});
console.log(process.env.USER);

module.exports = transport;
