const num = [1, 2, 3, 4, 5];
const dbl = num.map((n) => n * 2);
console.log(dbl);

const word = ["banana", "apple", "cherry"];
const up = word.map((w) => {
  return w.toUpperCase();
});
console.log(up);

const first = word.map((w) => {
  return w.charAt(0).toUpperCase() + w.substring(1);
});
console.log(first);

const num1 = [64, 4, 9, 16, 25];
const sqr = num1.map((n) => {
  return Math.sqrt(n);
});
console.log(sqr);

for (let i = 1; i <= 15; i++) {
  //   let three = Math.floor(i / 3);
  //   let five = Math.floor(i / 5);

  //   if (i % 3 == 0 && i % 5 == 0) {
  //     console.log("FooBar");
  //   } else if (i % 3 == 0) {
  //     console.log("Foo");
  //   } else if (i % 5 == 0) {
  //     console.log("Bar");
  //   } else {
  //     console.log(i);
  //   }

  if (three * 3 == i && five * 5 == i) {
    console.log("flowBar");
  } else if (three * 3 == i) {
    console.log("Flow");
  } else if (five * 5 == i) {
    console.log("Bar");
  } else {
    console.log(i);
  }
}

//

// let count3 = 0;
// let count5 = 0;
// for (let i = 0; i < 15; i++) {
//   let str = "";
//   count3++;
//   count5++;
//   if (count3 === 3) {
//     str += "foo";
//     count3 = 0;
//   }

//   if (count5 === 5) {
//     str += "bar";
//     count5 = 0;
//   }

//   if (str) {
//     console.log(str);
//   } else {
//     console.log(i);
//   }
// }
