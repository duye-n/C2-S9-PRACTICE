import React, { useState } from "react";
import '../src/index.css'
function App() {
  const [numberA, setNumberA] = useState("");
  const [numberB, setNumberB] = useState("");
  const [total, setTotal] = useState("");

  const handleInputA = (event) => {
    setNumberA(event.target.value);
  };

  const handleInputB = (event) => {
    setNumberB(event.target.value);
  };

  const computeSum = () => {
    const sum = parseFloat(numberA) + parseFloat(numberB);
    if (isNaN(sum)) {
      <div className="error ">setTotal("Error: A and B should be number");</div>; 
      setTotal("Error: A and B should be number");
    } else {
      setTotal(sum);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="number" onChange={handleInputA} value={numberA} />

      <label>B =</label>
      <input type="number" onChange={handleInputB} value={numberB} />

      <label>A + B =</label>
      <input value={total} disabled />

      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;
