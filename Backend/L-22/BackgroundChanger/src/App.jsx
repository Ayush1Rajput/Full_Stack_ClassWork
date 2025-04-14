import { useState } from "react";

function App() {
  // const [bgColor, setBgColor] = useState("white");

  // const changeColor = (color) => {
  //   setBgColor(color);
  // };

  let x = 10;
  const [count, setCount] = useState(x);

  return (
    // <div
    //   className="app"
    //   style={{ width: "100vw", height: "100vh", backgroundColor: bgColor }}
    // >
    //   <div
    //     style={{
    //       padding: "20px",
    //       display: "flex",
    //       justifyContent: "space-evenly",
    //     }}
    //   >
    //     <button></button>
    //     <button onClick={() => changeColor("blue")}>Blue</button>
    //     <button onClick={() => changeColor("green")}>Green</button>
    //     <button onClick={() => changeColor("red")}>Red</button>
    //     <button></button>
    //   </div>
    // </div>
    <div
      style={{
        display: "flex",
        // marginLeft: "200px",
        backgroundColor: "grey",
      }}
    >
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
