process.on("exit", function () {
  console.log("안녕히 계세요..!");
});
process.on("exit", function () {
  console.log("안녕히 계세요..!2222");
});

process.emit("exit");
process.emit("exit");
process.emit("exit");
process.emit("exit");

console.log("프로그램 막바지로 실행중 ..");
