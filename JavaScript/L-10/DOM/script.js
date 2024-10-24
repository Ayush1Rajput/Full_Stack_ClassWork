const splpara = document.getElementById("spclPara");

console.log(splpara);

const para = document.querySelectorAll(".para");

splpara.style.border = "2px solid red";

console.log(para);

for (let x of para) {
  x.style.color = "blue";
  x.style.backgroundColor = "gray";
}

let image = document.querySelector("img");

image.style.height = "10rem";

image.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);

let romv = document.querySelector("p");
let remove = romv.removeAttribute("x");
console.log(remove);

const head = document.querySelector("h1");

head.setAttribute("class", "hello");
head.setAttribute("class", "two");

// head.setAttribute("class", "hello two");

// toggle class
head.classList.add("hello");
head.classList.add("two");

head.classList.toggle("one");

head.innerText = "hello";

const y = document.querySelectorAll("li")[2];
y.style.border = "2px solid pink";
y.previousElementSibling.style.color = "purple";
y.nextElementSibling.style.color = "green";

y.parentElement.style.border = "2px dashed black";

let ele = document.createElement("p");
ele.innerText = "hello world let play with DOM";
console.log(ele);
