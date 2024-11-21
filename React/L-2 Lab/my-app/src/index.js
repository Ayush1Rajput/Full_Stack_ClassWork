import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./Navbar";
import User from "./User";

const root = ReactDOM.createRoot(document.getElementById("root"));

let user = [
  { name: "Ayush", age: 22 },
  { name: "Karan", age: 20 },
  { name: "HariOm", age: 19 },
];
root.render(
  <>
    <Navbar></Navbar>
    {App()}
    <App></App>
    <App />
    {User(user[0])}
    {User(user[1])}
    {User(user[2])}
  </>
);
