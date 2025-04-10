import React from "react";
import { useState } from "react";
 
export default function App() {
   // App is a component
   const [count, setCount] =useState(0); // useState is a hook,it returns an array 
   function onClickHandler() {
      setCount(count + 1);
   }

return (
   <div>
      {/* buttton component */}
      <button id="btn" onClick={onClickHandler}>
         Counter {count}
          </button>
   </div>
);
}
 