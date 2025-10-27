import React from "react";
import DiceGame from "./components/DiceGame";


function DiceGame() {
  const [player1Roll, setPlayer1Roll] = useState(null)
  const [player2Roll, setPlayer2Roll] = useState(null)
  const [winner, setWinner] = useState("")

  const rollDice = () => {



    //randomia chasaweri
    setPlayer1Roll(roll1)
    setPlayer2Roll(roll2)

    if (roll1>roll2) setWinner("Player 1 wins")
    else if (roll2>roll1) setWinner("Player 2 wins")
    else setWinner("Tie")
  }

  const resetGame = () => {
    setPlayer1Roll(null)
    setPlayer2Roll(null)
    setWinner("")
  }

  return (
    <div>
      <h1>Two Player Dice Game</h1>
      <div>
        <Player name="Player 1" roll={player1Roll} />
        <Player name="Player 2" roll={player2Roll} />
      </div>
      <div>
        <button onClick={rollDice}>Roll Dice</button>
        <button onClick={resetGame}>Reset</button>
      </div>
      <h2>{winner}</h2>
    </div>
  )
}
export default App;
