import { useState } from "react";
import React from 'react';
import "./App.css"


function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count+1)
  let color = (count > 0) ? "green": (count<0)? "red" :"black";


  const decrement = () => {

    setCount(count-1)
  }
  const resetCount = () => {
    setCount(0)
  }
 
  return (
    <div className='container'>
      <h1>Counter</h1>
      <span style={{ color }} id='value'>{count}</span>
      <div className='btn-group'>
        <button onClick={decrement} className='btn btn-decrease'>DECREASE </button>
        <button onClick={resetCount} className='btn btn-reset'>RESET</button>
        <button onClick={increment} className='btn btn-increase'>INCREASE </button>


      </div>
    </div>
  );
}

export default App;
