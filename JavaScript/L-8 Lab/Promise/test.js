let pr1 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("p1");
  }, 5000);
});

let pr2 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("p2");
  }, 10000);
});

function fe() {
  console.log("hello");
  pr1.then((x) => {
    console.log(x);
  });
  console.log("World");
  pr2.then((y) => {
    console.log(y);
  });
}

console.log("Hi");
fe();
console.log("end");
