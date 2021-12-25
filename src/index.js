import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  return (
    <button >
      {props.text}
    </button>
  );
};

const Application = () => {

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <Button text="Reset" />
      <h1>Hello React</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
