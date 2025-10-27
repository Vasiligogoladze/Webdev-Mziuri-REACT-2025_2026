import React from "react";

const IncreaseButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      Increase
    </button>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default IncreaseButton;
