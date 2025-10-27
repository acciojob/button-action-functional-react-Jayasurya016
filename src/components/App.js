import React, { useState } from "react";
import "./../styles/App.css";

function App() {

  const [name, setName] = useState(false)

  return (
    <div id="main">

      <button id="click" onClick={()=>{setName(true)}}>Click Me</button>

      {
        (name && 
          <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
        )}
    </div>
  );
}


export default App;
