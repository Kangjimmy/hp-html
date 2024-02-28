const express = require("express");
const app = express();
require("dotenv").config();
app.set("port", process.env.PORT);

app.use((req, res, next) => {
  req.number = 2023;
  res.number = 2024;
  next();
});

app.use((req, res, next) => {
  res.send("<h1> " + req.number + " : " + res.number + " </h1>");
});

app.listen(app.get("port"), () => console.log("server is running ..."));
