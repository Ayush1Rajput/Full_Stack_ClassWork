var str = "This is JS and we are learning string ";
console.log(str);

var x = "This is also String 2nd type";
console.log(x);

var y = `This is also String type 3`;
console.log(y);

console.log(str.charAt(3));

console.log(x.toUpperCase());

console.log(str.toLowerCase());

console.log(str[5]);

var replaceVal = str.replace("is", "IS");
console.log(replaceVal);

console.log(str.replaceAll("ing", "...ING"));

var splitVar = str.split(" ");

console.log(splitVar);
console.log(str.split("JS"));
console.log(str.split("is"));

var money = 100;
// String Literal
var p = `I have Rs. ${money} `;
console.log(p);
