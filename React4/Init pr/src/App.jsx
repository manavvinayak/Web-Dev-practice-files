import React from "react";
import ReactDOM from "react-dom/client";

// function App() {
// return (
 
//   <h1 className="head">
//     The header line of this index!
//   </h1>

// )
// }

// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);


function App() {
  return (
    <div>
      <h1> The second heading line of another component</h1>
      <Component/>
     
    </div>
  )
};

const Component = () => {
  return (
    <p>
      Hero section
    </p>
  )
}



export default App;
