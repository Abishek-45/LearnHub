const connection = require("./Db_Connection");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors);
app.use(express.json());

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
