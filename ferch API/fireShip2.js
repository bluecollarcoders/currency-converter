const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapased: ${Date.now() - tick}`);

const codeBlocker = () => {
  //   let i = 0;
  //   while (i < 10000000000) {
  //     i++;
  //   }

  return new Promise.resolve().then((v) => {
    let i = 0;
    while (i < 10000000000) {
      i++;
    }
    return "pig oh my gosh!!";
  });
};

log("mmm sandwich");

codeBlocker().then(log);

log("mmm sandwich 2");
