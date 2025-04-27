import { useState,useEffect } from 'react'
import './App.css'

function App() {
  // Conditional rerend 
  let [counterVisible, setCounterVisibility] = useState(true);
// using useEffect hook to run sideeffects
useEffect(() => {
  setInterval(() => {
    setCounterVisibility((c) => !c);

  }, 5000);
}, []); // passing the empty dependency array [] to run this effect only once
  
  
  return <div>
    <h1>Conditional rendering</h1>
   {counterVisible && <Counter></Counter> }
   hello 
  </div>
}



function Counter () {
  const [count, setCount] = useState(0);

 
  // hooking into lifecycle events of react
  // guard our setinterval from getting re-rendering 
  useEffect(function() {
    setInterval(function() {
      setCount(count => count + 1); // final value is inserted, count => count + 1 is a function thats returning updated count in a time interval
    }, 1000)
  },[]);
  
  return <div>
    <h1 id='text'>{count}</h1>
   
  </div>
}
export default App
