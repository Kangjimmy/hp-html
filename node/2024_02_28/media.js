const fs = require("fs");
const http = require("http");

http
  .createServer(function (req, res) {
    fs.readFile("cat.jpg", function (error, data) {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      res.end(data);
    });
  })
  .listen(3000, () => console.log("server running."));
