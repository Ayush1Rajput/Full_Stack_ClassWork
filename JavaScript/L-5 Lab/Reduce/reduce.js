var arr = [11, 20, 28, 30, 60, 66];

var x = arr.reduce((acc, item, idx, arr) => {
  //   console.log(acc);
  //   console.log(item);
  return (acc += item);
});

console.log(x);
