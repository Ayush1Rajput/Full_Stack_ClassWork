function fun(y) {
  //   return 20;
  console.log("Inside fun function");
  y();
}

var x = () => {
  console.log("Inside X function");
};

// console.log(fun(x));

fun(x);
