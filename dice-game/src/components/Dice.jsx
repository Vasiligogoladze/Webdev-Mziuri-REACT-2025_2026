import React from "react"

function Dice({ value }) {
  if (value === 1) return <div>⚀</div>
  if (value === 2) return <div>⚁</div>
  if (value === 3) return <div>⚂</div>
  if (value === 4) return <div>⚃</div>
  if (value === 5) return <div>⚄</div>
  if (value === 6) return <div>⚅</div>
  return <div>-</div>
}

export default Dice
