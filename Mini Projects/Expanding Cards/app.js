let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box = document.querySelectorAll(".box");

box1.addEventListener("click", () => {
  // box.style.width = "10vw";
  box1.style.width = "40vw";
});
box2.addEventListener("click", () => {
  // box.style.width = "10vw";
  box2.style.width = "40vw";
});
box3.addEventListener("click", () => {
  // box.style.width = "10vw";
  box3.style.width = "40vw";
});
box4.addEventListener("click", () => {
  box4.style.width = "40vw";
  // box.style.width = "10vw";
});
box5.addEventListener("click", () => {
  // box.style.width = "10vw";
  box5.style.width = "40vw";
});

// box.forEach((element) => {
//   element.addEventListener("click", () => {
//     removeActiveClasses();
//     element.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   box.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }
