const express = require("express");

const router = express.Router();
const Authentication_Route = require("./Routes/Authentication_Route");

router.use("/Authentication", Authentication_Route);

module.exports = router;
