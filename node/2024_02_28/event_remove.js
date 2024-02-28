function wow(err) {
  console.log("에러 에러 에러~~");
  process.removeListener("uncaughtException", wow);
}

process.on("uncaughtException", function (err) {
  console.log("에러!!!!");
  process.removeListener("uncaughtException", onUncaughtException);
});

function test() {
  setTimeout(test, 2000);
  errorzzzzz.roor.roo();
}

setTimeout(test, 2000);
