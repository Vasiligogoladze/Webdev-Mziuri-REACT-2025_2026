import React from "react";

const DecreaseButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      Decrease
    </button>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default DecreaseButton;
