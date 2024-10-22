const head = document.getElementById("heading");

console.log(head);

const city = document.getElementsByClassName("favcity");
console.log(city);

console.log(city[1].innerHTML);

let para = document.getElementsByTagName("p");
console.log(para);

console.log(para[1].innerHTML);

head.style.color = "red";

para[1].style.backgroundColor = "green";

city[1].style.fontSize = "2rem";

const x = document.querySelector("#heading");

x.style.border = "2px solid blue";

console.log(x);
