import { useState } from 'react'
// import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  
  // let counter = 5

  const addValue=()=>{
    // counter++;
    if(counter>=20){
      console.log("Value does not go to 20+");
    }else{
      setCounter(counter=counter+1)
    //   console.log("Clicked"+ counter);
        setCounter((prevCount)=>{return prevCount+1});

        // setCounter((prevCount)=>{return prevCount+1});
        // setCounter((prevCount)=>{return prevCount+1});
    }

  }

  const removeValue=()=>{
    if(counter==0 ){
      console.log("Value does not go to negative")
    }else{
      setCounter(counter-1)
      console.log("Remove :"+counter)
    }
  }

  return (
    <>
      <h1>react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add +</button>
      <button onClick={removeValue}>Remove -</button>
    </>
  )
}

export default App
