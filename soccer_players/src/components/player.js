import React, { useState } from 'react'
import playersData from '../playersData'

export default function Player() {
  const [player, setPlayer] = useState(playersData[0])

  function getPlayer() {
    console.log("getting new player")
    setPlayer(player => (playersData[Math.floor(Math.random() * playersData.length)]))
  }
  return (
    <section className="player">
      {player.inWorldCup && <div className="player-badge">In World Cup</div>}
      <img src={player.img} className="player-image" />
      <h2 className="player-name">{player.name}</h2>
      <p>Team: {player.team}</p>
      <p>Number: {player.number}</p>
      <button onClick={getPlayer}>Get new player</button>
    </section>
  )
}