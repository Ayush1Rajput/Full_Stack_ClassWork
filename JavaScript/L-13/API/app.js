const URL = "https://official-joke-api.appspot.com/random_joke";
// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");

// fetch(URL)
//   .then((res) => {
//     //   console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     h1.innerText = "Joke : " + data.setup;
//     h2.innerText = "PunchLine : " + data.punchline;

//     // print on console
//     console.log("Joke : " + data.setup);
//     console.log("PunchLine : " + data.punchline);
//   });

// Method 2

fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("Joke : " + data.setup);
    console.log("PunchLine : " + data.punchline);

    const cont = document.querySelector(".container");
    const p1 = document.createElement("p");
    p1.innerText = "Joke : " + data.setup;

    cont.appendChild(p1);

    setTimeout(() => {
      const p2 = document.createElement("p");
      p2.innerText = "PunchLine : " + data.punchline;

      cont.appendChild(p2);
    }, 5000);
  });
