arr = [10, 20, 2, 3, 30, 40];

function omap(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    // console.log(i);
  }
}

function omap(arr, idx) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(i);
  }
}
function omap(arr, idx, arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(i);
    console.log(arr);
  }
}

omap(arr, 0, arr);
