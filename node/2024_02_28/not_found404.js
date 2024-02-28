require("http")
  .createServer((req, res) => {
    res.writeHead(404);
    res.end();
  })
  .listen(3000, () => console.log("404 server.."));
