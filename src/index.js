import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  );
};

const Application = () => {

  // your code here
  const [name, setName] = useState("");
  const reset = (e) => {
    setName("");
    // your code here
  };

  return (
    <main>
      <input placeholder='Type your name' value={name}  onChange={ e => setName(e.target.value)}>
      </input>
      <Button onClick={reset}>
        RESET
      </Button >
      {name ? <h1>Hello, {name}</h1> : <h1></h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
