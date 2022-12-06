export default function Player(player) {
  return (
    <section className="player">
      {player.inWorldCup && <div className="player-badge">In World Cup</div>}
      <img src={player.img} className="player-image" />
      <h2 className="player-name">{player.name}</h2>
      <p>Team: {player.team}</p>
      <p>Number: {player.number}</p>
    </section>
  )
}