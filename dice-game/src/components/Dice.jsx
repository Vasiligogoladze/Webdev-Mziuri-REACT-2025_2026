import React from "react";

function Dice(props) {
  const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  return <div>{diceFaces[props.value - 1]}</div>;
}

export default Dice;
