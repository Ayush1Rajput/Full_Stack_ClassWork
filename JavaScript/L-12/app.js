let head = document.querySelector("#head");
head.style.border = "2px solid blue";

head.addEventListener("click", (e) => {
  //   console.log("Event Lishner");
  console.log(e.target);
  e.target.style.color = "yellow";
  e.target.style.backgroundColor = "blue";
});

// let dark = document.querySelector("#dark");
// dark.addEventListener("click", () => {
//   let body = document.querySelector("body");
//   body.classlist.toggle("mode");
// });

// let light = document.querySelector("#light");
// dark.addEventListener("click", () => {
//   let body = document.querySelector(body);
//   body.style.backgroundColor = "white";
// });
