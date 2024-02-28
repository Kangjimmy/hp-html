const fs = require("fs");

require("http")
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    fs.readFile("../index.html", "utf-8", (err, data) => {
      res.end(data);
    });
  })
  .listen(3000, function () {
    console.log("server running at http://127.0.0.1:3000");
  });
