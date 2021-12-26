import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  return (
    <button onClick={props.reset} >
      {props.text}
    </button>
  );
};

const Application = () => {

  // your code here
  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    // your code here
    setName("");
  };

  return (
    <main>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your name"></input>
      <Button text="Reset" reset={reset} />
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
