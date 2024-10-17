setTimeout(() => {
  console.log("Hello after 6 Sec.");
}, 6000);

console.log("Mid");

setTimeout(() => {
  console.log("Hello after 4 Sec.");
}, 4000);

setTimeout(() => {
  console.log("Hello after 7 Sec.");
}, 7000);
// let date = new Date();

// console.log(date);
// console.log(date.getTime());

// console.log("start");

let d = new Date().getTime();

while (new Date().getTime() < d + 8000) {}

console.log("End");
