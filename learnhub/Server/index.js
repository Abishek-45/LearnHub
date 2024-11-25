const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors);
app.use(express.json());

app.listen(3001, (err) => {
  if (err) {
    console.log({ ERR: "server failed" });
  } else {
    console.log({ LOG: "server running at port 3001" });
  }
});
