const fs = require("fs");
const http = require("http");

http
  .createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", "utf8", (err, data) => {
      res.end(data);
    });
  })
  .listen(3003, function () {
    console.log("Server running at http://127.0.0.1:3003");
  });
