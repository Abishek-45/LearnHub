const User = require("../Schema/User_Credentials");
const mail_transport = require("../Utilities/Mailer");
const otpGenerator = require("otp-generator");
const path = require("path");
const fs = require("fs");

const Register = {
  user_registration: async (req, res) => {
    const { name, rollno, email, Password } = req.body;
    try {
      const users = await User.findOne({ rollno });
      const names = await User.findOne({ name });
      if (users) {
        return res
          .status(400)
          .json({ message: "This rollno has already been registered" });
      } else if (names) {
        return res
          .status(400)
          .json({ message: "The name has already been taked" });
      } else {
        const otp = otpGenerator.generate(4, {
          upperCaseAlphabets: false,
          specialChars: false,
          lowerCaseAlphabets: false,
        });
        req.session.userData = {
          name,
          rollno,
          email,
          Password,
          otp: parseInt(otp, 10),
        };

        const htmlTemplate = fs.readFileSync(
          path.join(__dirname, "..", "Templates", "Mail_Template.html"),
          "utf-8"
        );
        const personalizedHtml = htmlTemplate.replace("${otp}", otp);

        const info = await mail_transport.sendMail({
          from: "no_reply_LearnHub@gmail.com",
          to: email,
          subject: "OTP Verification",
          html: personalizedHtml,
        });
        console.log("Message sent: " + info.messageId);
        console.log(otp);
        return res.status(200).json({ message: "OTP sent " });
      }
    } catch (err) {
      console.log(err);
      return res.status(404).send({ Message: "error found" });
    }
  },
  Verify_OTP: async (req, res) => {
    const { OTP } = req.body;

    if (!req.session.userData) {
      return res.status(400).json({ message: "Session expired" });
    }
    const { name, rollno, email, Password, otp } = req.session.userData;

    if (parseInt(OTP, 10) !== otp) {
      return res.status(400).json({ message: "invalid otp" });
    }
    const new_user = new User({ name, rollno, email, Password });

    await new_user.save();
    req.session.destroy();
    res
      .status(201)
      .json({ message: "User registered successfully", user: new_user });
  },
};

module.exports = Register;
