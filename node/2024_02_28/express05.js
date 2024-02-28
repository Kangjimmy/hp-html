const express = require("express");
const app = express();
require("dotenv").config();

app.set("port", process.env.PORT);

app.use((req, res, next) => {
  const output = [];

  for (let i = 0; i < 3; i++) {
    output.push({ count: i, name: "name-" + i });
  }
  res.send(output);
});

app.listen(app.get("port"), () => console.log("server is running..."));
