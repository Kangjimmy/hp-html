const express = require("express");
const fs = require("fs");
const app = express();
require("dotenv").config();
app.set("port", process.env.PORT);

app.use((req, res, next) => {
  fs.readFile("HTMLPage.html", "utf-8", (error, data) => {
    res.send(data);
  });
});
app.listen(app.get("port"), () => console.log("server is running ..."));
