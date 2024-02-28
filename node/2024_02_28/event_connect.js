process.on("exit", () => {
  console.log("프로그램이 끝났습니다. 안녕히 가세요~");
});

process.on("uncaughtException", (err) => {
  console.log("에러 발생!!😫");
});

let count = 0;

function test() {
  count++;

  if (count > 3) {
    return;
  }
  setTimeout(test, 2000);
  error.roor.roo();
}
setTimeout(test, 2000);
