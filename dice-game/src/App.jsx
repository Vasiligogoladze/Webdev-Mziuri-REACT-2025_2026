import React, { useState } from "react";
import Player from "./components/Player";

function App() {
  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(1);
  const [message, setMessage] = useState("Click the button to roll!");

  function rollDice() {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    setPlayer1(roll1);
    setPlayer2(roll2);

    if (roll1 > roll2) {
      setMessage("Player 1 wins!");
    } else if (roll2 > roll1) {
      setMessage("Player 2 wins!");
    } else {
      setMessage("It's a tie!");
    }
  }

  return (
    <div>
      <h1>Dice Game</h1>

      <Player name="Player 1" diceValue={player1} />
      <Player name="Player 2" diceValue={player2} />

      <button onClick={rollDice}>Roll Dice</button>

      <p>{message}</p>
    </div>
  );
}

export default App;
