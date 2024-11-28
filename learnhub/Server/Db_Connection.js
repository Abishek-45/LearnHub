const mongoose = require("mongoose");

const connection_url = "mongodb://localhost:27017/school";

const connection = () => {
  mongoose
    .connect(connection_url)
    .then(() => console.log("connected successfully to database"))
    .catch(() => console.log("could not connect with the database"));
};

module.exports = connection;
