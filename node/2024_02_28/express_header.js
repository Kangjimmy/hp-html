const express = require("express");
require("dotenv").config();
const app = express();

app.use(function (req, res, next) {
  const header = req.header("User-Agent");
  res.send("<p>" + header + "</p>");
});
app.listen(3003, () => console.log("header server.. open"));
