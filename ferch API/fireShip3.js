const getFruit = async (name) => {
  const fruits = {
    pineapple: "f1",
    peach: "f2",
    strawberry: "f3",
  };

  return Promise.resolve(fruits[name]);
};

getFruit("peach").then(console.log);

// Async + Await

const makeSmoothie = async () => {
  const a = await getFruit("pineapple");
  const b = await getFruit("strawberry");

  const smoothie = Promise.all([a, b]);

  return smoothie;
};

makeSmoothie().then(console.log);

const makeSmoothie2 = async () => {
  var a;
  const v = await getFruit("pineabble");
  v = a;
  const v_1 = await getFruit("strawberry");
  return [v_1, a];
};

const badSmoothie = async () => {
  try {
    const a = await getFruit("pineapple");
    const b = await getFruit("strawberry");

    const smoothie = Promise.all([a, b]);

    throw "broken";

    return smoothie;
  } catch (err) {
    console.log(err);
    return `We are going to be fine `;
  }
};

const fruits = ["peach", "pineapple", "strawberry"];

const smoothie = fruits.map((v) => getFruit(v));

const fruitLoop = async () => {
  for await (const handle of smoothie) {
    console.log(handle);
  }
};

fruitLoop();

const fruitInspection = async () => {
  if ((await getFruit("peach")) === "f2") {
    console.log("looks peachy");
  }
};

fruitInspection();
