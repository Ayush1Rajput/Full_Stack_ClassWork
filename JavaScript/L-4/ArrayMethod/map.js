var arr = [10, 20, 30, 40, 50, 60];

var x = () => {
  console.log("HEllo");
};
arr.map(x);
// OR
console.log();
arr.map(() => {
  console.log("HELLO");
});

console.log();

// arr.map((item, index, arr) => {});

arr.map((a, b, c) => {
  console.log(`Array value = ${a}`);
  console.log(`Index value = ${b}`);
  console.log(`Return the Array ${c}`);
});

// Map function always return a same size Array
