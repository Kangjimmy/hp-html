const express = require("express");
require("dotenv").config();
const app = express();

app.set("port", process.env.PORT || 3000);

app.use((req, res, next) => {
  console.log("미들웨어에서 요청을 처리함");
  res.send("<h1>express 서버에서 응답한 결과입니다.</h1>");
  next();
});
app.use((req, res, next) => {
  console.log("두번째 미들웨어");
  next();
});
app.use((req, res, next) => {
  console.log("세번째 미들웨어");
});

app.listen(app.get("port"), () => {
  console.log("server running at 127.0.0.1:30..");
});
