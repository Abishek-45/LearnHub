const connection = require("./Db_Connection");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const main_router = require("./Main_Route");

const app = express();
const otpSession = session({
  secret: "otp_secret_key",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 5 * 60 * 1000,
    secure: false,
  },
});

app.use(cors());
app.use(express.json());
app.use(otpSession);

app.use("/", main_router);

async function Run_Server() {
  try {
    await connection();
    app.listen(3001, async (err) => {
      console.log({ LOG: "server running at port 3001" });
    });
  } catch (err) {
    console.log({ ERR: "server failed" });
  }
}

Run_Server();
