// process.on("uncaughtException", () => {
//   console.log("이 함수는 부득이하게 쓰이는 이벤트라서 함부로 사용하면 안된다.");
// });

// let count = 0;
// function test() {
//   count++;
//   if (count > 3) {
//     return;
//   }

//   setTimeout(test, 2000);
//   abc().abcd();
// }

// test();

// 이벤트 연결 개수 제한

// process.setMaxListeners(20); // 얘로 늘려주면 이벤트 연결 개수를 더 풀 수 있다.
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});
// process.on("exit", function () {});

// 이벤트 제거 메서드

// function onUncaughtException() {
//   console.log("예외가 발생..");

//   process.removeListener("uncaughtException", onUncaughtException);
// }

// process.on("uncaughtException", onUncaughtException);

// function test() {
//   setTimeout(test, 2000);
//   abc.error.error();
// }
// test();

// process.on("exit", () => {
//   console.log("exit 안녕히 계세효..");
// });

// process.emit("exit");
// process.emit("exit");
// console.log("프로그램 실행 중.");
// process.emit("exit");

const express = require("express");
const fs = require("fs");
require("dotenv").config();
const app = express();
const path = require("path");
app.set("port", process.env.PORT);

// app.use(express.static(path.join("public")));
app.get("/", function (req, res) {
  const options = {
    root: path.join(__dirname + "/public"),
  };

  const fileName = "cat.jpg";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent: ", fileName);
    }
  });
});

app.listen(app.get("port"), function (err) {
  if (err) console.error(err);
  console.log("server listening on PORT", app.get("port"));
});

// app.use((req, res, next) => {
//   console.log("미들웨어1");
//   fs.readFile("cat.jpg", (err, data) => {
//     res.sendFile(data);
//   });
// });

// app.listen(app.get("port"), () => console.log("middel ware server test.."));
