const fs = require("fs");
const http = require("http");

http
  .createServer(function (req, res) {
    fs.readFile("HTMLPage.html", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(3000, () => console.log("server running at http://127.0.0.1:3000"));
