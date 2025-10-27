import React from "react"
import Dice from "./Dice"

function Player({ name, roll }) {
  return (
    <div>
      <h2>{name}</h2>
      <Dice value={roll} />
    </div>
  )
}

export default Player
