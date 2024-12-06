let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let count = 0;

let arr = [".box2", ".box3", ".box4"];
let arr1 = [".div1", ".div2", ".div3"];

for (let i = 0; i < arr.length; i++) {
  prev.addEventListener("click", (i) => {
    document.querySelector(arr[i]).style.border = "2px solid yellow";
    document.querySelector(arr1[i]).style.border = "2px solid yellow";
  });
}
next.addEventListener("click", (count) => {
  if (count == 3) {
  } else {
    document.querySelector(arr[count]).style.border = "2px solid blue";
    document.querySelector(arr1[count]).style.border = "2px solid blue";
    count++;
    console.log(arr1[count]);
  }
});
