import React, { useState } from 'react';
import './App.css';

// Import Components

function App() {
  // Write Javascript here
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);
  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  }
  const toggleElement = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <h1 className={toggle ? 'active' : ''}>Hello React</h1>
      <h2>Counter {counter}</h2>
      <button onClick={increment}>Click</button>
      <button onClick={toggleElement}>Toggle</button>
    </div>
  );
}

export default App;
