const express = require("express");
const app = express();
require("dotenv").config();

app.set("port", process.env.PORT);

app.use(function (req, res, next) {
  res.redirect("https://www.naver.com");
});

app.listen(app.get("port"), () => console.log("redirect go!!"));
