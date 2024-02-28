const express = require("express");
require("dotenv").config();
const app = express();

app.set("port", process.env.PORT);

app.use((req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const region = req.query.region;

  res.send("<p>" + name + " - " + region + "</p>");
});

app.listen(app.get("port"), () => console.log("server query start... !!"));
