const head = React.createElement("h1", { id: "head" }, "Learnign React");

console.log(head);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(head);

const main = React.createElement("div", { id: "main" }, [
  React.createElement("div", { id: "div1" }, [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
  ]),
  React.createElement("div", { id: "div2" }, [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
  ]),
]);

root.render(main);
