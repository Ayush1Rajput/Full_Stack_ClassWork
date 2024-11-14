// let county = prompt();

let btn = document.querySelector("#btn");
let inp = document.querySelector("#inp");

let stn = "";
let county = btn.addEventListener("click", () => {
  console.log(inp.value);
  stn = inp.value;
  result(stn);
  stn = "";
});

function result(cont) {
  const URL = `http://universities.hipolabs.com/search?country=${cont}`;

  let name1 = document.getElementById("name");
  let state = document.getElementById("state");
  let web = document.getElementById("web");

  name1.innerHTML = "<h1>University</h1>";
  state.innerHTML = "<h1>State</h1>";
  web.innerHTML = "<h1>Website</h1>";

  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const p1 = document.createElement("p");
        p1.innerText = "Name : " + data[i].name;
        name1.appendChild(p1);

        const p2 = document.createElement("p");
        p2.innerText = "State : " + data[i]["state-province"];
        state.appendChild(p2);

        const p3 = document.createElement("p");
        p3.innerText = "Website : " + data[i].web_pages[0];
        web.appendChild(p3);
      }
    });
}
