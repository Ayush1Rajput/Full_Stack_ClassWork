var obj = {
  Name: "Ayush",
  Age: 22,
  City: "Aligarh",
  "Full name": "Ayush Rajput",
};

console.log(obj);
console.log(`Hello my name is ${obj.Name} and my Age is ${obj.Age}`);
console.log();
console.log(obj["City"]);
console.log();
console.log(obj["Full name"]);
console.log();
console.log();

// For in loop
for (var i in obj) {
  console.log(i);
  console.log(obj[i]);
}
