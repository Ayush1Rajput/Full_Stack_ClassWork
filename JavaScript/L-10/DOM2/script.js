const para = document.createElement("p");

para.innerText = "Hello World of JS let's play with DOM";
console.log(para);

const cont = document.querySelector(".container");
cont.appendChild(para);

para.style.color = "green";
para.style.border = "2px dashed blue";

let ul = document.createElement("ul");
cont.appendChild(ul);

for (let i = 0; i < 5; i++) {
  let li = document.createElement("li");
  li.innerText = prompt();
  ul.appendChild(li);
}
