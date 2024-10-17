async function fun() {
  return "Hello";

  //   return new Promise((res, rej) => {
  //     res("Hello");
  //   });
}

// var x = fun();
// console.log(x);

let pr = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Resolved Data");
  }, 3000);
});

pr.then((res) => {
  console.log(res);
});

console.log("Start");

async function fetch() {
  var x;
  console.log("HEllo");
  pr.then((res) => {
    x = res;
  });

  x = await pr;
  console.log("World");
}

fetch();
console.log("end");
