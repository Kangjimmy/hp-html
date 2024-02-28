require("http")
  .createServer(function (req, res) {
    res.writeHead(302, { Location: "https://www.naver.com" });
    res.end();
  })
  .listen(3000, () => console.log("server is running..."));
