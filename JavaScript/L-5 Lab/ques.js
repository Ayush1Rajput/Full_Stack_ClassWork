let arr = [
  { first: "Rohit", last: "Jha", Age: 25 },
  { first: "Karan", last: "kumar", Age: 35 },
  { first: "himashu", last: "Gautam", Age: 15 },
  { first: "Deepika", last: "Kumari", Age: 25 },
];

// Ques 1

// let ans = arr.filter((item, idx, ar) => {
//   if (item.Age == 25) {
//     return true;
//   }
// });

// let res = ans.map((item) => {
//   return item.first + " " + item.last;
// });
// console.log(res);

// Ques 2

var z = arr.reduce((acc, item, ind, arr) => {
  if (acc[item.Age]) {
    acc[item.Age] += 1;
  } else {
    acc[item.Age] = 1;
  }
  return acc;
}, {});
console.log(z);
