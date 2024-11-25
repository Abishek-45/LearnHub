const mongoose = require("mongoose");

const User_Credentials = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  rollno: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "enter a valid email address",
    ],
  },
  Password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters"],
  },
});

const User = mongoose.model("User_Credentials", User_Credentials);

module.exports = User;
