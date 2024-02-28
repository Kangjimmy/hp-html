const http = require("http");

const server = http.createServer();

const port = 3000;

server.listen(port, function () {
  console.log("웹 서버가 시작되었습니다. : %d", port);
});

const sClose = () => server.close();

setTimeout(sClose, 10000);

// my ip 59.29.225.165
