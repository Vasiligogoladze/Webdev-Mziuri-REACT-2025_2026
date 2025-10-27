import React from "react";

const ResetButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      Reset
    </button>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ResetButton;
