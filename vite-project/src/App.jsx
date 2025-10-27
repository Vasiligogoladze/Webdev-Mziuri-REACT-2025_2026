import React, { useState } from "react";
import IncreaseButton from "./components/IncreaseButton";
import DecreaseButton from "./components/DecreaseButton";
import ResetButton from "./components/ResetButton";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>Click Counter</h1>
      <h2>{count}</h2>

      <div style={styles.buttonGroup}>
        <DecreaseButton onClick={handleDecrease} />
        <ResetButton onClick={handleReset} />
        <IncreaseButton onClick={handleIncrease} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "sans-serif",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
};

export default App;
