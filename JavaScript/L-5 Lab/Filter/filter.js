var arr = [1, 2, 3, 4, 5, 6];

var filtered_arr = arr.filter((item, idx, arr) => {
  //   console.log(arr);
  if (idx % 2 === 0) {
    console.log(item);
    return true;
  }
});

console.log(filtered_arr);
