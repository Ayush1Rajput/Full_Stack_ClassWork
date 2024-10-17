let pr = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res("Promise Resolved Data");
  //   }, 3000);

  setTimeout(() => {
    rej("There is some Error");
  }, 3000);
});

// console.log(pr);
console.log("Start");

pr.then((res) => {
  console.log(res);
}).catch((rej) => {
  console.log(rej);
});

console.log("end");
