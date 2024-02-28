const http = require("http");

const server = http.createServer();

const port = 3000;

server.on("request", function (req, res) {
  console.log("request On");

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>응답페이지</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>Node.js로부터의응답페이지</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(port, function () {
  console.log("웹 서버가 시작되었습니다. %d", port);
});
