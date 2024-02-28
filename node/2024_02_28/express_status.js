const express = require("express");
const app = express();
require("dotenv").config();

app.set("port", process.env.PORT);

app.use((req, res, next) => {
  res.status(404).send("<h1>ERROR!!</h1>");
});

app.listen(app.get("port"), () => console.log("404 page open..!"));
