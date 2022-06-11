const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapased: ${Date.now() - tick}`);

const codeBlocker = () => {
  let i = 0;
  while (i < 10000000000) {
    i++;
  }
};
