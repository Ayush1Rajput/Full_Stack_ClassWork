var arr = [12, 23, "Hello", 33];

console.log(arr);
arr.push("Ram");
arr.push(50);
console.log(arr);

arr.pop();
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(3);
arr.unshift("Start");
console.log(arr);

arr.shift();
console.log(arr);

// splice(index,remove_count,add_items......)
arr.splice(1, 0, "Hi"); // it is use for add/remove
console.log(arr);

console.log("Length of Array is :", arr.length);

var arr1 = [11, 12, 13];
var arr2 = ["start", "mid", "end"];

console.log(arr1 + arr2);

console.log(arr1.concat(arr2));

let arr3 = arr1.concat(arr2);

console.log(arr3.slice(1, 4));
