import { useState } from "react";

function App1() {
    <div style={{background: "#dfe6e9", height: "100vh"}}>
       <ToggleMessage />
    </div>
}

const ToggleMessage = () => {
    let [isVisible, setVisible ] = useState(true);
    // useState returns array of 2 elements one is actual parameter and another is a function
console.log("re-render happens by react")
function toggle() {
    setVisible(!isVisible);
}
return (
    <div>
        <button Onclick={toggle}>
            Toggle Message
        </button>
        {isVisible && <p>This message is conditionally rendered! </p>}
            </div>
);
};

export default App1;
