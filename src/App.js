import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Value: {counter}</h1>
      <button onClick={setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default App;
