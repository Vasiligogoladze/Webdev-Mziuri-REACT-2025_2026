import React from "react";
import Dice from "./Dice";

function Player(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <Dice value={props.diceValue} />
    </div>
  );
}

export default Player;
