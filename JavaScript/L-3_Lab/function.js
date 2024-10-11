function fun() {
  console.log("Inside the function");
}

fun();

var x = function fun1() {
  console.log("Inside the function fun1");
};

console.log(x);
x();

function fun2() {
  console.log("Inside fun2 function");
}

var p = fun2;
fun2();
p();

// Anonymous Function

// var x = function () {
//   var y = 10;
//   console.log(y);
// };

var x = () => {
  var y = 10;
  console.log(y);
};

x();
